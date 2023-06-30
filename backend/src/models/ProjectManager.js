const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(
      `insert into ${this.table} (name, description, link, user_id) values (?, ?, ?, ?)`,
      [project.name, project.description, project.link, project.user_id]
    );
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set name = ?, description = ?, link = ?, user_id = ? where id = ?`,
      [
        project.name,
        project.description,
        project.link,
        project.user_id,
        project.id,
      ]
    );
  }

  findProjectsWithUserId(userId) {
    return this.database.query(`SELECT * FROM project WHERE user_id = ?`, [
      userId,
    ]);
  }
}

module.exports = ProjectManager;
