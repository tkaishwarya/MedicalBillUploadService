# MedicalBillUploadService
Steps:

Set up the project environment and install the required packages using npm.
Create an Express app and set up the two endpoints for GET and POST requests.
Define the medical bill object and use it to store the bills in memory.
Implement the GET endpoint to return the list of medical bills.
Implement the POST endpoint to create a new medical bill.
Write tests for both endpoints using Jest and Supertest.


Steps to run :
npm start
The server will start running on port 3000.


To test:
npm test
This will run all the tests and provide a summary of the results.

API Documentation

GET /items: returns a list of medical bills

Request

GET /items

Response

Status: 200 OK
Content-Type: application/json

POST /items: creates a new medical bill

Request
POST /items
Content-Type: application/json

{
    "patientName": "John Doe",
    "patientAddress": "123 Main St, Anytown USA",
    "hospitalName": "Anytown Hospital",
    "dateOfService": "2023-02-15",
    "billAmount": 100.00
}

Response

Status: 201 Created
Content-Type: application/json
Location: /items/3

{
    "id": 3,
    "patientName": "John Doe",
    "patientAddress": "123 Main St, Anytown USA",
    "hospitalName": "Anytown Hospital",
    "dateOfService": "2023-02-15",
    "billAmount": 100.00
}


