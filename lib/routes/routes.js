const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.get("/products", makeupController.index);

module.exports = router;
