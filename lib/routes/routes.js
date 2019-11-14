const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.get("/product", makeupController.index);
router.get("/product/:brand", makeupController.brand);
module.exports = router;
