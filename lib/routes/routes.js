const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.get("/product", makeupController.index);
router.get("/product/brand/:brand", makeupController.findbrand);
router.get("/product/type/:type", makeupController.findtype);
module.exports = router;
