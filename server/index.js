const express          = require('express');
const {EnterData}      = require('./MysqlData.js');
const cors             = require('cors');
const mysql            = require('mysql');
const bcrypt           = require('bcrypt');
const morgan           = require('morgan')

const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./JWT.js");



const saltRounds = 10;
const port = process.env.PORT || 4000;
const key = "$IloveJWT!";
const header = {
  alg: "HS512",
  typ: "JWT"
};

// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const connection = mysql.createConnection(EnterData);
const SelectClient = (emaillogin) => `SELECT * FROM Clients where login='${emaillogin}' or email='${emaillogin}'`;
const InsertClient = (data) => `INSERT INTO Clients (login, password, first_name, tel, email) 
                                VALUES('${data.login}', '${data.password}', '${data.first_name}', '${data.tel}', '${data.email}');`;
const SelectTrucks = 'SELECT * FROM Trucks';
const SelectDrivers = 'SELECT * FROM Drivers';


app.get('/', (req, res) =>{
  console.log('Hi!');
  //res.status(200).json({ user: req.user, auth: req.isAuthenticated()} );
});


app.get('/Trucks', (req, res) => {
  connection.query(SelectTrucks, (error, results) => {
    if(error){
      return res.send(error);
    }
    return res.status(200).json({
      data: results
    })
  });
});


app.get('/Drivers', (req, res) => {
  connection.query(SelectDrivers, (error, results) => {
    if (error){
      res.send(error);
    }
    else{
      return res.status(200).json({
        data: results
      })
    }
  });
});


app.post("/api/GenerateJWT", (req, res) =>{
  let { header, claims, key } = req.body;
  // In case, due to security reasons, if the client doesn't send a key,
  // use our default key.
  key = key || "$PraveenIsAwesome!";
  res.json(GenerateJWT(header, claims, key))
});


app.post("/api/DecodeJWT", (req, res) => {
  if(req.body.sJWS)
    res.json(DecodeJWT(req.body.sJWS))
  else{
    res.json('');
  }
});


app.post("/api/ValidateJWT", (req, res) =>{
  let { header, token, key } = req.body;
  // In case, due to security reasons, if the client doesn't send a key,
  // use our default key.
  key = key || "$PraveenIsAwesome!";
  res.json(ValidateJWT(header, token, key));
});


app.post("/api/Users/SignIn", (req, res) => {
  console.log(req.body);
  connection.query(InsertClient(req.body), function(error, results){  
    if(error){
      return res.status(422).json({
        Error: "User with this login or email already exists!"
      });
    }
    else{
      return res.status(200).json({
        Message: "Successfully Signed In!"
      });
    }
  }); 
});


app.post("/api/Users/Check", (req, res) => {
  console.log(req.body);
  connection.query(SelectClient(req.body.emaillogin), function(error, results){
    if (results[0]) {
      if (req.body.password === results[0].password) {
        res.status(200).json(results[0]);  
      }
      else {
        res.status(401).json({
          Error: "Incorrect password or login/email!"
        });  
      }
    }
    else {
      res.status(403).json({
        Error: "User with this login or email doesn`t exists!"
      });
    }
  });
});



app.listen(port, () =>  console.log(`Running on ${port}`));