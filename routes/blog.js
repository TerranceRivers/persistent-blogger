var express = require("express");
var router = express.Router();
const { getAllBlogs } = require("../controller/BlogController");

router.get("/all-blogs", getAllBlogs);

module.exports = router;