const util = require('util');
const express = require('express');
const debug = util.debuglog('my-app');
const app = express();

app.get('/', (req, res) => {
    debug('Icncoming request on/', req.route);
    res.send('Hey.\n');  
});

setTimeout(function myTimeout() {
    debug('timeout complete');
    console.log('I waited for you');
}, 100);

app.listen(3000, () => console.log('Listening on port 3000'));