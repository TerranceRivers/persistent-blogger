var express = require("express");
var router = express.Router();
const {
  getAllBlogs,
  createBlogPost,
  getBlogById,
  updateBlogPost,
} = require("../controller/BlogController");

router.get("/all-blogs", getAllBlogs);
router.post("/create", createBlogPost);
router.get("/id", getBlogById);
router.put("/update/:id", updateBlogPost)

module.exports = router;
