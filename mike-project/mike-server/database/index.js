const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');
const db = mongoose.connection;

//koneksi ke database
mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true }) ;
// mongoose.connect(`mongodb://category:mike123@localhost:27017/category?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true });

db.on('open', () => console.log('server connect'));
db.once('error', () => console.log('server not connect'));


module.exports = db;
