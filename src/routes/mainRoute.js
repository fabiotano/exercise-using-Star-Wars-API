const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

// Ruta principal "/"
router.get("/", mainController.home);

// Ruta "/people"
router.get("/people", mainController.people);

// Ruta "/planets"
router.get("/planets", mainController.planets);



module.exports = router;
