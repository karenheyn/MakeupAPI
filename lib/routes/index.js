const express = require("express");
const router = express();
const makeupController = require("../controllers/makeupcontroller");

router.use(require("./routes"));

module.exports = router;
