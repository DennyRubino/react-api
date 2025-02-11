import express from "express";
import cors from "cors";
import articlesData from "./src/ArticleData.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("public/images"));

app.get("/articles", (req, res) => {
  res.json(articlesData);
});

app.get("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID non valido" });
  }

  const article = articlesData.find((item) => item.id === id);

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Articolo non trovato" });
  }
});

app.post("/articles", (req, res) => {
  const { title, content, image, tags } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Title e content sono obbligatori" });
  }

  const newId =
    articlesData.length > 0
      ? Math.max(...articlesData.map((a) => a.id)) + 1
      : 1;

  const newArticle = {
    id: newId,
    title: " ",
    content: "",
    image: image,
  };

  articlesData.push(newArticle);
  res.status(201).json(newArticle);
});

app.delete("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = articlesData.findIndex((item) => item.id === id);

  if (index !== -1) {
    const deletedArticle = articlesData.splice(index, 1);
    res.json({ message: "Articolo eliminato", deletedArticle });
  } else {
    res.status(404).json({ message: "Articolo non trovato" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server in esecuzione sulla porta ${PORT}`);
});
