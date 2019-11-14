const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.use(require("./routes"));

module.exports = router;
