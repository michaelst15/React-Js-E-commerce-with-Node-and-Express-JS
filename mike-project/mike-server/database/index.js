const mongoose = require('mongoose');
// const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');
const db = mongoose.connection;
      
//koneksi ke database
mongoose.connect(`mongodb+srv://product:mike123@cluster0.l9zez.mongodb.net/test?authSource=admin&replicaSet=atlas-f7i326-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }) ;
// mongoose.connect(`mongodb://product:mike123@localhost:27017/product?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true });
     
db.on('open', () => console.log('server connect'));   
db.once('error', () => console.log('server not connect'));


module.exports = db;
