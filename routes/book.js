const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require("../middleware/multer-config");
const sharpImg = require("../middleware/sharp-config");
const bookCtrl = require("../controllers/book");


router.get("/", bookCtrl.getAllBooks);
router.post("/", auth, multer, sharpImg, bookCtrl.createBook);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, sharpImg, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);


module.exports = router;