const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const cors       = require('cors');

// Initialize the app
const app = express();

app.use(cors());

const SelectTrucks = 'SELECT * FROM Trucks';

const connection = mysql.createConnection({
  host     : 'zanner.org.ua',
  port     : '33321',
  user     : 'ka7516',
  password : '4NId2owTIUsyaqwF',
  database : 'ka7516'
});

connection.connect(err=>{
  if(err) return err;
});

app.get('/', (req, res) =>{
  res.send('Hi girls and ziabls');
})

// https://expressjs.com/en/guide/routing.html
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
// Start the server
app.listen(4000, () => {
  console.log('Running on 4000');
});