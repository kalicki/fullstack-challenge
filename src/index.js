const express = require('express');
const path = require('path');
const axios = require('axios');
//import 'dotenv/config';
const app = express();

const baseURL = 'https://my-json-server.typicode.com/kalicki/ayga-fullstack-internship';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/vehicles/:id', (req, res) => {
  axios.get(baseURL + '/getVehicleInfo/'+req.params.id).then(
    response => {

      var doors;
      if(response.data.data.fourDoorSedan.value == 'True') {
        doors = 4;
      } else {
        doors = 2;
      }

      var vehicleInfo = {
        vin: response.data.id,
        color: response.data.data.color.value,
        doorCount: doors,
        driveTrain: response.data.data.driveTrain.value
      };
      return res.send(vehicleInfo); }
  );
});

app.get('/vehicles/:id/doors', (req, res) => {
  axios.get(baseURL + '/getSecurityStatus/'+req.params.id).then(
    response => {

      var returnList = [] // empty Object
      for(var i=0; i<response.data.data.doors.values.length; i++) {
        var doorsInfo = {
          location: response.data.data.doors.values[i].location.value,
          locked: response.data.data.doors.values[i].locked.value
        };
        returnList.push(doorsInfo);
      }

      return res.send(returnList); }
    );
});

app.get('/vehicles/:id/battery', (req, res) => {
  axios.get(baseURL + '/getEnergyStatus/'+req.params.id).then(
    response => {

      var batteryLvl = {
        percent: response.data.data.batteryLevel.value,
      };
      return res.send(batteryLvl); }
  );
});

app.get('/vehicles/:id/fuel', (req, res) => {
  axios.get(baseURL + '/getEnergyStatus/'+req.params.id).then(
    response => {

      var tankLvl = {
        percent: response.data.data.tankLevel.value,
      };
      return res.send(tankLvl); }
  );
});

app.get('/vehicles/:id/location', (req, res) => {
  axios.get(baseURL + '/getLocationStatus/'+req.params.id).then(
    response => {

      var location = {
          latitude: response.data.data.location.values[0].latitude.value,
          longitude: response.data.data.location.values[1].longitude.value
      };
      return res.send(location); }
  );
});


app.listen(3003, () =>
  console.log('Example app listening on port 3003!'),
);
