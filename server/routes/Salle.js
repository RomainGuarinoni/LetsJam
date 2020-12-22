const express = require("express");

var salleController = require("../controllers/salleController");
const router = express.Router();

router.get("/", salleController.info);

module.exports = router;
