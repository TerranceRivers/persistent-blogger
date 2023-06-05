var express = require("express");
var router = express.Router();

const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
} = require("../controller/AuthorController");

router.get("/all-authors", getAllAuthors);
router.post("/new-author", createAuthor);
router.get("/get-author-by-id", getAuthorById);
router.put("update/:id", updateAuthorById)
router.delete("delete/:id", deleteAuthorById)

module.exports = router;