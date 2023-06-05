const Author = require("../model/Author");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.status(200).json({ success: true, data: authors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const newAuthor = await new Author(req.body);
    const saveAuthor = await newAuthor.save();
    res.status(200).json({ success: true, data: saveAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.query;
    const author = await Author.findById(id);
    if (!author) {
      return res
        .status(404)
        .json({ success: false, message: "Author not found" });
    }
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    if (!updatedAuthor) {
      return res
        .status(404)
        .json({ success: false, message: "Author not found" });
    }
    res.status(200).json({ success: true, data: updatedAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res
        .status(404)
        .json({ success: false, message: "Author not found" });
    }
    res.status(200).json({ success: true, data: deletedAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
