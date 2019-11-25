const {EnterData}  = require('./MysqlData.js');
const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const cors       = require('cors');


// Initialize the app
const app = express();

app.use(cors());

const SelectTrucks = 'SELECT * FROM Trucks';
const SelectDrivers = 'SELECT * FROM Drivers';

const connection = mysql.createConnection(EnterData);

connection.connect(err=>{
  if(err) return err;
});

app.get('/', (req, res) =>{
  res.send('Hi girls and ziabls');
})

app.get('/Trucks', (req, res) => {
  connection.query(SelectTrucks, (error, results) => {
    if (error){
      res.send(error);
    }
    else{
      return res.json({
        data: results
      })
    }
  });
});
app.get('/Drivers', (req, res) => {
  connection.query(SelectDrivers, (error, results) => {
    if (error){
      res.send(error);
    }
    else{
      return res.json({
        data: results
      })
    }
  });
});
// Start the server
app.listen(4000, () => {
  console.log('Running on 4000');
});