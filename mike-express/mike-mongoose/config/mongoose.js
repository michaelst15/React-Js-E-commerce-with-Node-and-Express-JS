const mongoose = require('mongoose');
mongoose.connect('mongodb://mike-jobs:mike123@localhost:27017/mike-job?authSource=admin')
const db = mongoose.connection;
db.once('open', () => console.log('connect success'));
db.on('error', () => console.log('not success connect'));