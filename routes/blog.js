var express = require("express");
var router = express.Router();
const {
  getAllBlogs,
  createBlogPost,
  getBlogById,
  updateBlogPost,
  deleteBlogById
} = require("../controller/BlogController");

router.get("/all-blogs", getAllBlogs);
router.post("/create", createBlogPost);
router.get("/id", getBlogById);
router.put("/update/:id", updateBlogPost)
router.delete("/delete/:id", deleteBlogById)

module.exports = router;
