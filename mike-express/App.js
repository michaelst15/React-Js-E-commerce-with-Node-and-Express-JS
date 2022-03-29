const express = require('express');
const app = express();
const router = require('./mike-mongoose/config/router/router');


app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use(router);


app.get('/', (req, res) => {
    res.send('successfull')
})

app.listen(3000, () => { 
    console.log('success')
}) 