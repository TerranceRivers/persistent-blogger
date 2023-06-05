const BlogPost = require("../model/Blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createBlogPost = async (req, res) => {
  try {
    const newPost = await new BlogPost(req.body);
    const savePost = await newPost.save();
    res.status(200).json({ success: true, data: savePost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.query;
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    res.status(200).json({ success: true, data: blogPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    res.status(200).json({ success: true, data: updatedBlogPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    res.status(200).json({ success: true, data: deletedBlogPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlogPost,
  getBlogById,
  updateBlogPost,
  deleteBlogById,
};
