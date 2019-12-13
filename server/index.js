const {EnterData}      = require('./MysqlData.js');
const express          = require('express');
const bodyParser       = require('body-parser');
const mysql            = require('mysql');
const cors             = require('cors');
const { check, validationResult } = require('express-validator');
const bcrypt           = require('bcrypt');
const saltRounds = 10;


// Initialize the app
const app = express();

app.use(cors());

const SelectTrucks = 'SELECT * FROM Trucks';
const SelectDrivers = 'SELECT * FROM Drivers';
const SelectClients = (login, email) => `SELECT * FROM Clients where login='${login}' or email='${email}'`;
const InsertClient = (data, hash) => `INSERT INTO Clients (login, password, first_name, last_name, tel, email) 
                                VALUES('${data.login}', '${hash}', '${data.first_name}', '${data.last_name}', '${data.tel}', '${data.email}');`;


const connection = mysql.createConnection(EnterData);


app.use(express.json());
app.use(bodyParser.json());

connection.connect(err=>{
  if(err){
    console.log(err);
  }
   return err
});

app.get('/', (req, res) =>{
  res.send('Hi girls and ziabls');
})

app.get('/Trucks', (req, res) => {
  connection.query(SelectTrucks, (error, results) => {
    if(error){
      return res.send(error);
    }
    return res.json({
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
      return res.json({
        data: results
      })
    }
  });
});

app.post('/signUp', [
  // username must be an email
  check('login', 'Login field cannot be empty.').exists(),
  check('login', 'Login must be between 4-15 characters long.').isLength({ min: 4, max: 15 }),
  check('email', 'The email field cannot be empty.').exists(),
  check('email', 'Email address must be between 4-100 characters long, please try again.').isLength({ min: 4, max: 100 }),
  check('password', 'Password must be between 8-100 characters long.').isLength({ min: 8, max: 100 }),
  //check("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let exist = checkUser(req.body, res); //{ login: '',  email: '',  first_name: '',  last_name: '',  password: '',  tel: '' };
});
// Start the server
app.listen(4000, () => {
  console.log('Running on 4000');
});
let checkUser = (data, res) =>{
  connection.query(SelectClients(data.login, data.email), function(error, results){
    AddUser(data, res);
  });
}
let AddUser = (data, res) =>{
    bcrypt.hash(data.password, saltRounds, function(err, hash) {
      try{   
        connection.query(InsertClient(data, hash), function(error, results){
          if (error){
            return res.status(421).json({ text: 'User with this login or email already exists.' });
          }
          //console.log(results);
          console.log('Successful add to DB');
          return 'Successful';
        })
      }
      catch(error){
        console.log(error);
      }
  });
}
