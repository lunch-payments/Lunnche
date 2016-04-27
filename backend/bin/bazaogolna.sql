CREATE DATABASE LunchOnline; 
CREATE TABLE userbase
(
ID int NOT NULL,
first_name varchar(255) NOT NULL,
last_name varchar(255) NOT NULL,
username varchar(255) UNIQUE, 
password varchar(255),
PRIMARY KEY(ID)
);
INSERT INTO bazaogolna (ID, Im, Nazwisko, Username, Password)
VALUES (1, Maciej, Sawicki, user1, user2);
