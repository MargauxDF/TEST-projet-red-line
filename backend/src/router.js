const express = require("express");

const router = express.Router();

const baseApiUrl = "/api/wilders";

const { validateUser, validateProject } = require("./services/validator");

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get(`${baseApiUrl}`, userControllers.browse);
router.get(`${baseApiUrl}/:id`, userControllers.read);
router.put(`${baseApiUrl}/:id`, validateUser, userControllers.edit);
router.post(`${baseApiUrl}`, validateUser, userControllers.add);
router.delete(`${baseApiUrl}/:id`, userControllers.destroy);
router.get(`${baseApiUrl}/:id/projects`, userControllers.readWithProjects);

const projectControllers = require("./controllers/projectControllers");

router.get("/api/projects", projectControllers.browse);
router.get("/api/projects/:id", projectControllers.read);
router.post("/api/projects", validateProject, projectControllers.add);
router.delete("/api/projects/:id", projectControllers.destroy);
router.put("/api/projects/:id", validateProject, projectControllers.edit);

module.exports = router;
