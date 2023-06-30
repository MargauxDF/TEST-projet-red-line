const models = require("../models");

const browse = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion au serveur");
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.project
    .find(id)
    .then(([rows]) => {
      if (rows[0]) {
        res.send(rows[0]);
      } else {
        res.status(404).send("Project not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const add = (req, res) => {
  const newProject = req.body;

  models.project
    .insert(newProject)
    .then(([result]) => {
      res
        .location(`/projects/${result.insertId}`)
        .status(201)
        .send("Project Created");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.project
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Project not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

const edit = (req, res) => {
  const project = req.body;

  models.project
    .update(project)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Project not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion au serveur");
    });
};

module.exports = {
  browse,
  read,
  add,
  destroy,
  edit,
};
