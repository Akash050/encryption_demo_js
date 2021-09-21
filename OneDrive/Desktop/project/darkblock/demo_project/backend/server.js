
//  require("dotenv").config();
 const bodyParser = require('body-parser');
 const express = require('express');
 const http = require('http');
 const crypto = require('crypto')
 
 let port = 3004;
 
 const app = express();
 const server = http.Server(app);
 
 app.get('/test', (req, res) => {
   res.send("test gtest")
 })

 algorithm = 'aes-256-ctr'
 key = '123';

 function encrypt(text){
     var cipher = crypto.createCipher(algorithm,key)
     var crypted = cipher.update(text,'utf8','hex')
     crypted += cipher.final('hex');
     console.log("crypted==>", crypted)
     return crypted;
 }

algorithm = 'aes-256-ctr';
key = '123';
//Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
//Text is the Cipher which we need to decrypt using 'password'(Key).
function decrypt(text){
   var decipher = crypto.createDecipher(algorithm,key)
   var dec = decipher.update(text,'hex','utf8')
   dec += decipher.final('utf8');
   console.log("deccc", dec)
   return dec;
}



 encrypt('test')
 decrypt('8ccbe92d')

 app.get('/test', (req, res) => {
    res.send("test gtest")
  })
 

 server.listen(process.env.PORT || 6000, () => {
   console.log(`backend running on port ${port}`)
 });
 
 