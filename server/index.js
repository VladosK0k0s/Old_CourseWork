const {EnterData, options}      = require('./MysqlData.js');
const express          = require('express');
const bodyParser       = require('body-parser');
const mysql            = require('mysql');
const cors             = require('cors');
const { check, validationResult } = require('express-validator');
const bcrypt           = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const MySQLStore = require('express-mysql-session')(session);
const serve_static = require('serve-static');
const sessionStore = new MySQLStore(options);
const LocalStr = require('passport-local').Strategy;

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
app.use(cookieParser('foo'));
app.use(serve_static(__dirname + '/../../public'));
app.use(session({
  secret: 'keyboard',
  resave: true,
  store: sessionStore,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStr({ usernameField: 'login'}, (login, password, done) =>{
    connection.query(`SELECT * FROM Clients where login='${login}'`, function(error, results, fields){
      let user = results[0];
      if(!user) return done(null, false, {message: 'Email is registred'});
      bcrypt.compare(password, user.password, (err, isMatch) =>{
        if(err) throw err;
        if(isMatch) {
          return done(null, user);
        }
        else{
          return done(null, false, {msg: 'incorrexct'});
        }
      });
    })
  })
)

connection.connect(err=>{
  if(err){
    console.log(err);
  }
   return err
});

app.get('/', (req, res) =>{
  console.log(req.user_id, req.isAuthenticated());
  res.json(req.user);
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
  connection.query(SelectClients(req.body.login, req.body.email), function(error, results){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) { 
      connection.query(InsertClient(req.body, hash), function(error, results){
        if(error){
          return res.status(421).json({ text: 'User with this login or email already exists.' });
        }
        console.log('Successful add to DB');
        return res.status(200).json({ text: 'Registration succecful!' });
      });
    });
  });  //{ login: '',  email: '',  first_name: '',  last_name: '',  password: '',  tel: '' };
});
// Start the server
app.listen(4000, () => {
  console.log('Running on 4000');
});

passport.serializeUser(function(user, done) {
  console.log('Ses',user.id);
  done(null, user.id);
});
 
passport.deserializeUser(function(user, done) {
  console.log('Des', user.id);
  done(null, user.id);
});




// connection.query('SELECT Last_Insert_id() as user_id', function(error, results, fields){
//   const user_id = results[0].user_id; 
//   req.logIn(user_id, function(d){
//     req.session.save(()=>{
     
//     });
//   });
// });