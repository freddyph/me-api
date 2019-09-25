var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kmom01', function(req, res) {
    const questions = [
        {
            question: "Berätta utförligt om din syn på nodejs backend " +
            "ramverk och berätta vilket ramverk du valde och varför.",
            answer: "Jag valde expressjs som backend ramverk," +
            " då jag har stor tidigare erfarenhet med det ramverket " +
            "och att det är det mest använda nodejs ramverket."
        },
        {
            question: "Berätta om din katalogstruktur" +
            " och hur du organiserade din kod, hur tänkte du?",
            answer: "Jag skapade en katalog med routes," +
            " som liknar det som kommer från scaffoldingen med express." +
            " Varje route fil exporterar en router."
        },
    ];

    res.json({ data: questions });
});

router.get('/kmom02', function(req, res) {
    const questions = [
        {
            question: "Vilket JavaScript-ramverk valde du och varför?",
            answer: "Jag valde att implementera en me-sida i alla ramverken" +
                    " mest för att jag ville lära mig alla."
        },
        {
            question: "Hur gick det att sedan implementera din me-sida i ramverket?",
            answer: "Det gick bra, men är lite trött på Angular."
        },
    ];

    res.json({ data: questions });
});

module.exports = router;
