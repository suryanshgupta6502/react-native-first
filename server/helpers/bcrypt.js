const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


const hashpass = (pass) => 
    bcrypt.hash(pass, saltRounds).then(function (hashpass) {
        // Store hash in your password DB.
        return hashpass;
    });


const passcompare =(pass,hash)=> bcrypt.compare(pass, hash).then(function (result) {
        // result == true
        return true;
    });


// function compare

module.exports = { hashpass,passcompare};
// module.exports = passcompare;