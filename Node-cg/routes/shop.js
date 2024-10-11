const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    //console.log('in home middleware');
    res.send('<h1>home Page!</h1>');
});

module.exports = router;