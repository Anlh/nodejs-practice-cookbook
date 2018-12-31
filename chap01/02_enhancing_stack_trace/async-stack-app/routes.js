const content = require('./content');
const {Router} = require('express');
const router = new Router();

router.get('/', (req, res) => {
    content()((err, html) => {
        if(err){
            return res.send(500);
        }
        res.send(html);
    });
});

module.exports = router;