const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const bills = [];

app.get('/items', (req, res) => {
  res.json(bills);
});

app.post('/items', (req, res) => {
  const bill = req.body;
  bills.push(bill);
  res.json(bill);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const Bill = {
  patientName: '',
  patientAddress: '',
  hospitalName: '',
  dateOfService: '',
  billAmount: 0,
};
