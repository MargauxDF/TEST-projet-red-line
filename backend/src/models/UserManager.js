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
}

module.exports = UserManager;
