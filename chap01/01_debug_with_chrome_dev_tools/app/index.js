const express = require('express');

const app  = express();
const future = require('./future');
const past = require('./past');


app.get('/:age', (req, res) => {
    res.send(past(req.params.age, 10) + future(req.params.future, 10)); 
});

app.listen(3000, () => console.log('App running on port:', 3000));