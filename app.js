
const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const index = require('./routes/index');
const hello = require('./routes/hello');
const login = require('./routes/login');
const register = require('./routes/register');

const app = express();
const port = 1337;

// const bcrypt = require('bcryptjs');
// const saltRounds = 10;
// const myPlaintextPassword = 'longandhardP4$$w0rD';
//
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
//
// dotenv.config();
//
// const payload = { email: "user@example.com" };
// const secret = process.env.JWT_SECRET;
// //
// const token = jwt.sign(payload, secret, { expiresIn: '1h'});
//
// jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//     if (err) {
//         // not a valid token
//     }
//
//     // valid token
// });

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // spara lösenord i databasen.
// });

app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// Add a route
// app.get("/", (req, res) => {
//     const data = {
//         data: {
//             msg: "Hello World"
//         }
//     };
//
//     res.json(data);
// });

// app.get("/hello/:msg", (req, res) => {
//     const data = {
//         data: {
//             msg: req.params.msg
//         }
//     };
//
//     res.json(data);
// });

// Testing routes with method
app.get("/user", (req, res) => {
    res.json({
        data: {
            msg: "Got a GET request, sending back default 200"
        }
    });
});

app.post("/user", (req, res) => {
    res.status(200).json({
        data: {
            msg: "Got a POST request, sending back 201 Created"
        }
    });
});

app.put("/user", (req, res) => {
    // PUT requests should return 204 No Content
    res.status(204).send();
});

app.delete("/user", (req, res) => {
    // DELETE requests should return 204 No Content
    res.status(204).send();
});

app.use('/', index);
app.use('/hello', hello);
app.use('/login', login);
app.use('/register', register);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));
