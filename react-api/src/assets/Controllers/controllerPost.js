const express = require("express");
const router = express.Router();
const posts = require("../data/data");

// index
router.get("/", (req, res) => {
  res.json(posts);
});

// show
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json();
  res.json(post);
});

// store
router.post("/", (req, res) => {
  const { title, content, image, tags } = req.body;
  if (!title || !content || !tags) {
    return res.status(400).json();
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    image: "react-api/public/pane_fritto_dolce.jpeg",
    tags,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, image, tags } = req.body;

  const postIndex = posts.findIndex((p) => p.id === parseInt(id));
  if (postIndex === -1) return res.status(404).json();

  res.json(posts);
});

//destroy
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((p) => p.id === parseInt(id));
  if (postIndex === -1) return res.status(404).json();

  const deletedPost = posts.splice(postIndex, 1);
  res.json(deletedPost);
});

module.exports = router;
