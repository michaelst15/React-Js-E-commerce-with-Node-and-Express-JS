const express = require('express');
const app = express();
const routes = require('./routes');


app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // for parsing application/json
app.use(routes);

app.get('/', (req, res) => {
    res.send('successfull')
})

app.listen(3000, () => { 
    console.log('success')
}) 