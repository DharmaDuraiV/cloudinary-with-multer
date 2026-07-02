const express = require("express");
const userController = require("../controllers/userController");
const uploads = require("../utils/cloudinary");

const router = express.Router();

router.post("/", uploads.single("profile"), userController.createUser);

module.exports = router;
