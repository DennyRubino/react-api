import React, { useState } from "react";
import articlesData from "./assets/Data/ArticleData";
import "./App.css";

function App() {
  const [articles, setArticles] = useState(articlesData);
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleImage, setNewArticleImage] = useState("");
  const [newArticleContent, setNewArticleContent] = useState("");
  const [newArticleTags, setNewArticleTags] = useState("");
  const [newArticleAuthor, setNewArticleAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArticle = {
      id: Date.now(),
      title: newArticleTitle,
      content: newArticleContent,
      author: newArticleAuthor,
      tags: newArticleTags.split(",").map((tag) => tag.trim()),
      image: newArticleImage,
    };

    setArticles([...articles, newArticle]);
    setNewArticleTitle("");
    setNewArticleContent("");
    setNewArticleImage("");
    setNewArticleTags("");
    setNewArticleAuthor("");
  };

  return (
    <div className="App">
      <h1>Lista Articoli</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.image} alt={article.title} width="200" />
            <p>
              <strong>Autore:</strong> {article.author}
            </p>
            <p>
              <strong>Categoria:</strong> {article.tags}
            </p>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>

      <h2>Aggiungi un nuovo contenuto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo dell'articolo"
          value={newArticleTitle}
          onChange={(e) => setNewArticleTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Autore"
          value={newArticleAuthor}
          onChange={(e) => setNewArticleAuthor(e.target.value)}
        />
        <textarea
          placeholder="Contenuto"
          value={newArticleContent}
          onChange={(e) => setNewArticleContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL immagine"
          value={newArticleImage}
          onChange={(e) => setNewArticleImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categorie"
          value={newArticleTags}
          onChange={(e) => setNewArticleTags(e.target.value)}
        />
        <button type="submit">Aggiungi contenuto</button>
      </form>
    </div>
  );
}

export default App;
