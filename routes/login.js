var express = require('express');
var router = express.Router();

//använd inte /hello då den kommer söka efter /hello/hello
router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Inloggningssida."
        }
    };

    res.json(data);
});

module.exports = router;
