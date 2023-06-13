const express = require("express");

const router = express.Router();

const baseApiUrl = "/api/wilders";

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get(`${baseApiUrl}`, userControllers.browse);
router.get(`${baseApiUrl}/:id`, userControllers.read);
// router.put(`${baseApiUrl}/:id`, userControllers.edit);
// router.post(`${baseApiUrl}`, userControllers.add);
// router.delete(`${baseApiUrl}/:id`, userControllers.destroy);

module.exports = router;
