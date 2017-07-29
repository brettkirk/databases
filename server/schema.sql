DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  `id` INTEGER AUTO_INCREMENT,
  `room_id` INTEGER NULL,
  `text` VARCHAR(255) NULL,
  `user_id` INTEGER NULL,
  `created_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  `id` INTEGER AUTO_INCREMENT,
  `room_name` VARCHAR(31) NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(63) NULL,
  PRIMARY KEY (`id`)
);
/* Create other tables and define schemas for them here! */
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (`id`);
ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (`id`);




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/
