const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.user
    .find(id)
    .then(([rows]) => {
      if (rows[0]) {
        res.send(rows[0]);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const edit = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const add = (req, res) => {
  const newUser = req.body;

  models.user
    .insert(newUser)
    .then(([result]) => {
      res
        .location(`/users/${result.insertId}`)
        .status(201)
        .send("New user created");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const destroy = (req, res) => {
  const { id } = parseInt(req.params, 10);

  models.user
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const readWithProjects = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let user = {};

  models.user
    .find(id)
    .then(([rows]) => {
      if (rows[0]) {
        [user] = rows;
        models.project
          .findProjectsWithUserId(user.id)
          .then(([projectRows]) => {
            user.projects = projectRows;
            res.send(user);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Internal error");
          });
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal error");
    });
};

// const readWithProjects = async (req, res) => {
//   try {
//     const id = parseInt(req.params.id, 10);

//     const [rows] = await models.user.find(id);
//     if (!rows[0]) {
//       return res.status(404).send("User not found");
//     }

//     const [user] = rows;
//     const [projectRows] = await models.project.findProjectsWithUserId(user.id);
//     user.projects = projectRows;
//     return res.send(user);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Internal error");
//   }
// };

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readWithProjects,
};
