const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, age, campus, profile_picture, email) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.age,
        user.campus,
        user.profile_picture,
        user.email,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, age = ?, campus = ?, profile_picture = ?, email = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.age,
        user.campus,
        user.profile_picture,
        user.email,
        user.id,
      ]
    );
  }

  findAll(limit, offset) {
    return this.database.query(
      `SELECT * FROM ${this.table} LIMIT ${limit} OFFSET ${offset}`
    );
  }

  countUsers() {
    return this.database.query(`SELECT COUNT(*) AS total from ${this.table}`);
  }
}

module.exports = UserManager;
