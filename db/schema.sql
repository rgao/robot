DROP DATABASE IF EXISTS robo_dr;

CREATE DATABASE robo_dr;

USE robo_dr;

CREATE TABLE Robot
(
    id INT NOT NULL,
    command VARCHAR(20),
    status_ BOOLEAN,
    PRIMARY KEY (id)
);  