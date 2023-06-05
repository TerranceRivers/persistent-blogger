const Blog = require("../model/Blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createTodo = async (req, res) => {
    try {
      const newTodo = await new Todo(req.body);
      const saveTodo = await newTodo.save();
      res.status(200).json({ success: true, data: saveTodo });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };


module.exports = {
    getAllBlogs,
}