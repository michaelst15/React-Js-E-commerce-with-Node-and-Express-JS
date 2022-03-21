const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req, res) => {
    res.send('successfull')
})

app.use(routes);

app.listen(3000, () => { 
    console.log('success')
})