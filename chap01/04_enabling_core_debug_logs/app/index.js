const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hey.\n');  
});

setTimeout(function myTimeout() {
    console.log('I waited for you');
}, 100);

app.listen(3000, () => console.log('Listening on port 3000'));