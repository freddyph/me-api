CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birthdate VARCHAR(10) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

DROP TABLE IF EXISTS reports;

CREATE TABLE IF NOT EXISTS reports (
    "week" VARCHAR(2) NOT NULL,
    "text" TEXT
);

INSERT INTO reports ("week", "text") VALUES
("1", "Länk till github repo https://github.com/freddyph/jsramverk"),
("2", "Här kommer rapport för kmom02")
;
