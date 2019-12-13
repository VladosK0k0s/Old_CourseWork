const LocalStr = require('passport-local').Strategy;
const mysql            = require('mysql');
const bcrypt           = require('bcrypt');


module.exports = function(passport){
    passport.use(
        new LocalStr({ usernameField: 'login'}, (email, password, done) =>{
            
        })
    )
}