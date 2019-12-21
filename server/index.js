const express          = require('express');
const {EnterData}      = require('./MysqlData.js');
const cors             = require('cors');
const path             = require("path");
const mysql            = require('mysql');
const morgan           = require('morgan');
const bcrypt           = require('bcrypt');
const multer           = require("multer");
const uuidv4           = require('uuid/v4');

const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./JWT.js");
const { saltRounds } = require('./bcryptSalt.js');



const port = process.env.PORT || 4000;
const key = "$IloveJWT!";
const header = {
  alg: "HS512",
  typ: "JWT"
};


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/images/')
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, `${Date.now()}.png`)
  }
})
var upload = multer({ storage: storage }).single('file');

// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const connection = mysql.createConnection(EnterData);
const SelectClient = (emaillogin) => `SELECT * FROM Clients where login='${emaillogin}' or email='${emaillogin}'`;
const InsertClient = (data, hash) => `INSERT INTO Clients (login, password, first_name, tel, email) 
                                VALUES('${data.login}', '${hash}', '${data.first_name}', '${data.tel}', '${data.email}');`;
const SelectTrucks = 'SELECT * FROM Trucks';
const SelectDrivers = 'SELECT * FROM Drivers';
const InsertTruck = (data) => `INSERT INTO Trucks (name, reg_number, mileage, cariage, volume, price1km, minDistance, photoname)
                                VALUES('${data.name}', ${+data.reg_number}, ${+data.mileage}, ${+data.cariage}, ${+data.volume}, 
                                ${+data.price1km}, ${+data.minDistance}, '${data.imagename}'); `;
const DeleteTruck = (id) => `DELETE FROM Trucks WHERE id = ${+id};`


app.get('/', (req, res) =>{
  console.log('Hi!');
  //res.status(200).json({ user: req.user, auth: req.isAuthenticated()} );
});

app.post("/api/photos/add", function(req, res) {
  upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      return res.status(200).send(req.file.filename)
  })
});

app.post("/api/photos/get", (req, res) => {
  return res.status(200).sendFile(__dirname + '/images/' + req.body.name);
});

app.post("/api/trucks/add", (req, res) => {
  if(!req.body.imagename) 
    return res.status(405).json({
      Error: "Image is necessary!"
    });
  connection.query(InsertTruck(req.body), function(error, results){  
    if(error){
      return res.status(422).json({
        Error: "Error"
      });
    }
    else{
      return res.status(200).json({
        Message: "Success"
      });
    }
  }); 
});

app.post('/api/trucks/del', (req, res) => {
  console.log(req);
  connection.query(DeleteTruck(req.body.id), function(error, results){  
    if(error){
      return res.status(422).json({
        Error: "Error"
      });
    }
    else{
      return res.status(200).json({
        Message: "Success"
      });
    }
  }); 
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
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    connection.query(InsertClient(req.body, hash), function(error, results){  
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
});


app.post("/api/Users/Check", (req, res) => {
  console.log(req.body);
  connection.query(SelectClient(req.body.emaillogin), function(error, results){
    if (results[0]) {
      bcrypt.compare(req.body.password , results[0].password, function(err, result) {
        if(result) res.status(200).json(results[0]);  
        else {
          res.status(401).json({
            Error: "Incorrect password or login/email!"
          });  
        }
      });
    }
    else {
      res.status(403).json({
        Error: "User with this login or email doesn`t exists!"
      });
    }
  });
});



app.listen(port, () =>  console.log(`Running on ${port}`));