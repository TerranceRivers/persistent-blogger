var express = require("express");
var router = express.Router();

const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} = require("../controller/AuthorController");

router.get("/all-authors", getAllAuthors);
router.post("/new-author", createAuthor);
router.get("/get-author-by-id", getAuthorById);
router.put("/update/:id", updateAuthor)
router.delete("/delete/:id", deleteAuthor)


module.exports = router;