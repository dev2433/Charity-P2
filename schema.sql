-- Drops the mycharity if it exists currently --

DROP DATABASE IF EXISTS my_charity;

-- Creates the "mycharity" database --

CREATE DATABASE my_charity;

create table charities (
id int not null AUTO_INCREMENT,
charity_name varchar(225) not null,
city varchar(225) not null,
state varchar(225) not null,
zip_code varchar(225) not null,
category varchar(225) not null,
description varchar(225) not null,
url varchar(225) not null,
url_image varchar(225)  null,

primary key (id)
)

INSERT INTO charities (charity_name, city, state, zip_code, category, description, url, url_image)
VALUES ('test', 'test', 'test', 'test', 'test', 'test', 'test', 'test');

select * from charities


);