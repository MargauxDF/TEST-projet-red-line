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

// const edit = (req, res) => {
//   const user = req.body;

//   user.id = parseInt(req.params.id, 10);

//   models.user
//     .update(user)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.status(404).send("User not found");
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Erreur interne");
//     });
// };

// const add = (req, res) => {
//   const newUser = req.body;

//   models.user
//     .insert(newUser)
//     .then(([result]) => {
//       res
//         .location(`/users/${result.insertId}`)
//         .status(201)
//         .send("New user created");
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Erreur interne");
//     });
// };

// const destroy = (req, res) => {
//   const { id } = parseInt(req.params, 10);

//   models.user
//     .delete(id)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.status(404).send("User not found");
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Erreur interne");
//     });
// };

module.exports = {
  browse,
  read,
  // edit,
  // add,
  // destroy,
};
