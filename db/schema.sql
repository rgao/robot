-- DROP DATABASE IF EXISTS robo_dr;

-- CREATE DATABASE robo_dr;

USE robo_dr;

CREATE TABLE Robot
(
    username VARCHAR(20),
    icon VARCHAR(20),
    xcoor INT NOT NULL,
    ycoor INT NOT NULL,
    background VARCHAR(20),
);  

CREATE TABLE Users 
(
    id INT NOT NULL,
    username VARCHAR(20),
    passcode VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);