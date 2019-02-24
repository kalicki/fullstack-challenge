# Full Stack Engineering Internship - Coding Challenge (Ayga)

The Tezla Motors is car company has a confusing API. It returns badly structured JSON which isn't always consistent. AygaCar needs to adapt the API into a cleaner format. Instructions

There are two API specifications provided below, the Tezla API and the AygaCar API Spec. Your task is to implement the AygaCar spec by making HTTP requests to the Tezla API.

Your tasks are as follows:
- Implement the `AygaCar API` and `AygaCar Dashboard (Bonus)` specification using any frameworks or libraries as necessary;
  - `API`: We'd like you to show your knowledge or superpowers with modern backend frameworks, eg: (ExpressJS) NodeJS, (Rails) Ruby or others.
  - `Dashboard (Bonus)`: You are free to show your superpowers.
- Write your code to be well structured and documented;
- Provide tests for implementation.


The flow looks like this:
```
Client (Dashboard) --> AygaCar API --> Tezla API
```

The Tezla API server is running at `https://my-json-server.typicode.com/kalicki/ayga-fullstack-internship`. The documentation below provides more details on the exact request/responses. Here is an example:

```
$ curl https://my-json-server.typicode.com/kalicki/ayga-fullstack-internship/getVehicleInfoService/1357
       -X GET
       -H 'Content-Type: application/json'
```

## Tezla API

Available IDs: `1357`, `2468`, `3579`

### Vehicle Info

**Request:**
```
GET /getVehicleInfo/1357
Content-Type: application/json
```

**Response:**
```
{
  "id": "1357",
  "service": "getVehicleInfo",
  "status": "200",
  "data": {
    "color": {
      "type": "String",
      "value": "Metallic Silver"
    },
    "fourDoorSedan": {
      "type": "Boolean",
      "value": "True"
    },
    "twoDoorCoupe": {
      "type": "Boolean",
      "value": "False"
    },
    "driveTrain": {
      "type": "String",
      "value": "v8"
    }
  }
}
```

### Security

**Request:**
```
GET /getSecurityStatus/1357
Content-Type: application/json
```
**Response:**
```
{
  "id": "1357",
  "service": "getSecurityStatus",
  "status": "200",
  "data": {
    "doors": {
      "type": "Array",
      "values": [
        {
          "location": {
            "type": "String",
            "value": "frontLeft"
          },
          "locked": {
            "type": "Boolean",
            "value": "False"
          }
        },
        {
          "location": {
            "type": "String",
            "value": "frontRight"
          },
          "locked": {
            "type": "Boolean",
            "value": "True"
          }
        }
      ]
    }
  }
}
```

### Status

**Request:**
```
GET /getEnergyStatus/1357
Content-Type: application/json
```
**Response:**
```
{
  "id": "1357",
  "service": "getEnergyStatus",
  "status": "200",
  "data": {
    "tankLevel": {
      "type": "Number",
      "value": "30"
    },
    "batteryLevel": {
      "type": "Number",
      "value": "99"
    }
  }
}
```

### Location

**Request:**
```
GET /getLocationStatus/1357
Content-Type: application/json
```
**Response:**
```
{
  "id": "1357",
  "service": "getLocationStatus",
  "status": "200",
  "data": {
     "location": {
      "type": "Array",
      "values": [
        {
          "latitude": {
            "type": "String",
            "value": "-71.056416"
          }
        },
        {
          "longitude": {
            "type": "String",
            "value": "42.351018"
          }
        }
      ]
    }
  }
}
```

## AygaCar API

| Request | Endpoint              | Description              |
| ------- | --------------------- | ------------------------ |
| GET     | vehicles/:id          | You should describe here |
| GET     | vehicles/:id/doors    | You should describe here |
| GET     | vehicles/:id/battery  | You should describe here |
| GET     | vehicles/:id/fuel     | You should describe here |
| GET     | vehicles/:id/location | You should describe here |

Example
```
# vehicles/:id 
{
  "vin": "1357",
  "color": "Metallic Silver",
  "doorCount": 4,
  "driveTrain": "v8"
}
```

```
# vehicles/:id/doors
[
  {
    "location": "frontLeft",
    "locked": false
  },
  {
    "location": "frontRight",
    "locked": true
  },
  {
    "location": "backLeft",
    "locked": false
  },
  {
    "location": "backRight",
    "locked": false
  }
]
```

```
# vehicles/:id/battery
{
  "percent": 99
}
```

```
# vehicles/:id/fuel
{
  "percent": 50
}
```

```
# vehicles/:id/location
{
  "latitude":	"-43.9509",
  "longitude":	"-34.4618"
}
```

### Documentation
**>>> Describe here your ideas, documentation and anything extra**

### Installation
**>>> Describe here how to run your code**
# ayga-fullstack-internship
