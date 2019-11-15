const express = require("express");
const router = express.Router();
const makeupController = require("../controllers/makeupcontroller");

router.get("/", makeupController.redirect);
router.get("/product", makeupController.index);
router.get("/product/brand/:brand", makeupController.findbrand);
router.get("/product/type/:type", makeupController.findType);
router.post("/product", makeupController.newProduct);
router.put("/product/:id", makeupController.updateProduct);
router.delete("/product/:id", makeupController.deleteProduct);
module.exports = router;
