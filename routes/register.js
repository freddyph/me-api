
var express = require('express');
var router = express.Router();

require('dotenv').config();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

const bcrypt = require('bcryptjs');
const saltRounds = 10;
const myPlaintextPassword = 'longandhardP4$$w0rD';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // spara lösenord i databasen.
});

db.run("INSERT INTO users (email, password) VALUES (?, ?)",
    "user@example.com",
    bcrypt.hash
    , (err) => {
    if (err) {
        // returnera error
    }

    // returnera korrekt svar
});

// "superlonghashedpasswordthatwewillseehowtohashinthenextsection"

const jwt = require('jsonwebtoken');

const payload = { email: "user@example.com" };
const secret = process.env.JWT_SECRET;

const token = jwt.sign(payload, secret, { expiresIn: '1h'});

router.post("/reports",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => reports.addReport(res, req.body));

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            // send error response
        }

        // Valid token send on the request
        next();
    });
}

//använd inte /hello då den kommer söka efter /hello/hello
router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Här ska registreringsformuläret ligga."
        }
    };

    res.json(data);
});


module.exports = router;
