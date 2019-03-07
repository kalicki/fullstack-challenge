# Full Stack Engineering Internship - Coding Challenge (Ayga)

The Tezla Motors is car company has a confusing API. It returns badly structured JSON which isn't always consistent. AygaCar needs to adapt the API into a cleaner format. Instructions

There are two API specifications provided below, the Tezla API and the AygaCar API Spec. Your task is to implement the AygaCar spec by making HTTPs requests to the Tezla API.

Your tasks are as follows:
- Implement the `AygaCar API` and `AygaCar Dashboard (Bonus)` specification using any frameworks or libraries as necessary;
  - `API`: We'd like you to show your knowledge or superpowers with modern backend frameworks, eg: (ExpressJS) NodeJS, (Rails) Ruby or others.
  - `Dashboard`: You are free to show your superpowers - (Bonus).
- Write your code to be well structured and documented;
- Provide tests for implementation - (Bonus).
- Please, send a Pull Request (PR) with your proposal.


The flow looks like this:
```
Client (Dashboard) --> AygaCar API --> Tezla API
```

The Tezla API server is running at `https://my-json-server.typicode.com/kalicki/ayga-fullstack-internship`. The documentation below provides more details on the exact request/responses. Here is an example:

```
$ curl https://my-json-server.typicode.com/kalicki/ayga-fullstack-internship/getVehicleInfo/1357
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

**The Idea**
The Idea was to create a new API (Ayga) to consume the Tezla API, and provide a few new endPoints as requested in the challenge. This API was successfully created using Node.js, coded in a simple and single file: "server.js". Also, I tried to implement a UI (the Dashboard) using React.js, to consume a single endpoint from the Ayga API, and then it should render the information on the screen.

It was also part of my plan, to implement a few tests using Mocha, Supertest, and Jest, but unfortunately I didn't have time to try it.

I uploaded a picture (ideaPic.jpg) of the plan that I was intended to to. You can check this picture on the main folder of this project.

**Api Documentation**
I used a program called "Postman" to document the API.
You can view the documentation by importing the file: "DocumentationAYGA.postman_collection.json" inside your own postman workspace, or you can access it through this link:
https://documenter.getpostman.com/view/6819612/S11PqwUX#intro

**The Dashborad (UI)**
I've never programmed with React.js before, but I took this opportunity to try to implement something new with react Components. Unfortunately, I couldn't finish the Dashboard, but I was able to learn, render a few things on the webpage, and make some calls on the API.

### Installation
1.Open the terminal inside the main project folder
2.Type $ npm install
3.Open another terminal inside the folder "dashboard"
4.Type $ npm install  (this might take a few minutes)
5.Back in the first terminal, type $ npm start
6.The Program should run both the API and the UI
7.You can now test the endpoints using the endpoints documented in the Postman file.
