var express = require('express');
var router = express.Router();
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
    const data = {
        data: {
            name: "Andreas Wahlstedt",
            cities: "Arvika, Karlstad, Västerås, Örebro, Göteborg, Stockholm",
            background: "Glad värmlänning som är på äventyr i Stockholm det här"+
            "läsåret. Räknar med att vara tillbaka i värmland till sommarlovet."
        }
    };

    res.json(data);
});

// dotenv.config();
// const payload = { email: "user@example.com" };
// const secret = process.env.JWT_SECRET;
// const token = jwt.sign(payload, secret, { expiresIn: '1h'});
//
// const bcrypt = require('bcryptjs');
// const myPlaintextPassword = 'longandhardP4$$w0rD';
// const hash = 'superlonghashedpasswordfetchedfromthedatabase';

// jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//     if (err) {
//         // not a valid token
//     }
// });

module.exports = router;
