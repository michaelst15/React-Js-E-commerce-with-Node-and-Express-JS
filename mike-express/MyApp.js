const express = require('express');
const app = express();
const MyData = require('./MyData')

app.get('/', (req, res) => {
    res.send('successfull')
})

app.use(MyData);

app.listen(3000, () => { 
    console.log('success')
})