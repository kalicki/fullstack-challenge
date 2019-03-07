const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;
const url = 'https://my-json-server.typicode.com/kalicki/ayga-fullstack-internship';

// Default route that returns a message if the API is working 
app.get('/', async (req, res) => {
    res.send({ message: 'API is fine and working!' });
});

// Route that calls Tezla API given a vehicle ID and returns the correct car object
app.get('/vehicles/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let response = await vehicleInfo(id);

        let fourDoorSedan = response.data.fourDoorSedan.value;
        let twoDoorCoupe = response.data.twoDoorCoupe.value;
        let doorCount = 0;
        if (fourDoorSedan == "True") {
            doorCount = 4;
        }
        else if (twoDoorCoupe == "True") {
            doorCount = 2;
        }

        res.status(200).json({
            vin: response.id,
            color: response.data.color.value,
            doorCount: doorCount,
            value: response.data.driveTrain.value
        });

    } catch (e) {
        return res.status(400).json({ success: false, error: e.message })
    }
});

// Route that calls Tezla API given a vehicle ID and returns the correct car object
app.get('/vehicles/:id/doors', async (req, res) => {
    try {
        let id = req.params.id;
        let response = await securityStatus(id);
        let object = [];
        let values = response.data.doors.values;
        values.forEach(door => {
            object.push({location: door.location.value, locked: door.locked.value})
        });

        res.status(200).json(
           object
        );

    } catch (e) {
        return res.status(400).json({ success: false, error: e.message })
    }
});

// Route that calls Tezla API given a vehicle ID and returns the correct car object
app.get('/vehicles/:id/battery', async (req, res) => {
    try {
        let id = req.params.id;
        let response = await energyStatus(id);
        res.status(200).json({
            percent: response.data.batteryLevel.value
        });

    } catch (e) {
        return res.status(400).json({ success: false, error: e.message })
    }
});

// Route that calls Tezla API given a vehicle ID and returns the correct car object
app.get('/vehicles/:id/fuel', async (req, res) => {
    try {
        let id = req.params.id;
        let response = await energyStatus(id);
        res.status(200).json({
            percent: response.data.tankLevel.value
        });

    } catch (e) {
        return res.status(400).json({ success: false, error: e.message })
    }
});

// Route that calls Tezla API given a vehicle ID and returns the correct car object
app.get('/vehicles', async (req, res) => {
    try {
        let vehiclesArray = await getVehiclesInfo();
        let allVehiclesArray = [];
        for (let i = 0; i < vehiclesArray.length; i++) {
            const vh = vehiclesArray[i].id;
            allVehiclesArray[i] = {
                vehicleInfo: await vehicleInfo(vh),
                securityStatus: await securityStatus(vh),
                energyStatus: await energyStatus(vh),
                locationStatus: await locationStatus(vh)
            }
        }
        res.status(200).json(allVehiclesArray);
    } catch (e) {
        return res.status(400).json({ success: false, error: e.message })
    }
});

// Route that calls Tezla API given a vehicle ID and returns the correct car object
app.get('/vehicles/:id/location', async (req, res) => {
    try {
        let id = req.params.id;
        let response = await locationStatus(id);
        res.status(200).json({
            latitude: response.data.location.values[0].latitude.value,
            longitude: response.data.location.values[1].longitude.value
        });

    } catch (e) {
        return res.status(400).json({ success: false, error: e.message })
    }
});

// Function that calls and returns a vehicle info from Tezla API 
const vehicleInfo = async (id) => {
    const response = await fetch(url + '/getVehicleInfo/' + id);
    const json = await response.json();
    return json;
}

// Function that calls and returns a security status from Tezla API 
const securityStatus = async (id) => {
    const response = await fetch(url + '/getSecurityStatus/' + id);
    const json = await response.json();
    return json;
}

// Function that calls and returns a energy status from Tezla API 
const energyStatus = async (id) => {
    const response = await fetch(url + '/getEnergyStatus/' + id);
    const json = await response.json();
    return json;
}

// Function that calls and returns a location status from Tezla API 
const locationStatus = async (id) => {
    const response = await fetch(url + '/getLocationStatus/' + id);
    const json = await response.json();
    return json;
}

// Function that calls and returns all vehicles info from Tezla API 
const getVehiclesInfo = async () => {
    const response = await fetch(url + '/getVehicleInfo/');
    const json = await response.json();
    return json;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
