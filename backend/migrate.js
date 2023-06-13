require("dotenv").config();
// eslint-disable-next-line import/no-extraneous-dependencies
const { fakerFR: faker } = require("@faker-js/faker");

const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`drop database if exists ${DB_NAME}`);
  await connection.query(`create database ${DB_NAME}`);
  await connection.query(`use ${DB_NAME}`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  const campus = ["Lyon", "Paris", "Toulouse", "Bordeaux", "Nantes", "Remote"];

  const generateRandomUsers = async (number) => {
    for (let i = 0; i < number; i += 1) {
      const randomCampus = campus[Math.floor(Math.random() * 5)];
      const firstname = faker.person.firstName();
      const lastname = faker.person.lastName();
      const age = faker.number.int({ min: 18, max: 65 });
      const profilePicture =
        "http://localhost:4000/default-profile-picture.jpeg";
      const email = faker.internet
        .email({
          firstName: firstname,
          lastName: lastname,
        })
        .toLowerCase();

      const userQuery = `INSERT INTO user (firstname, lastname, age, campus, profile_picture, email) VALUES ("${firstname}"," ${lastname}", ${age}, "${randomCampus}", "${profilePicture}", "${email}")`;

      connection.query(userQuery);
    }
  };

  const generateRandomProjects = async (number) => {
    for (let i = 0; i < number; i += 1) {
      const name = faker.word.words({ min: 3, max: 6 });
      const description = faker.lorem.lines(5);
      const link = faker.internet.url();
      const userId = faker.number.int({ min: 1, max: 20 });

      const projectQuery = `INSERT INTO project (name, description, link, user_id) VALUES ("${name}", "${description}", "${link}", ${userId})`;

      connection.query(projectQuery);
    }
  };

  await generateRandomUsers(20);
  await generateRandomProjects(30);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
