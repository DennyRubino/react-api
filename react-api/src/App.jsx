import React, { useState } from "react";
import articlesData from "./assets/Data/ArticleData";
import "./App.css";

function App() {
  const [articles, setArticles] = useState(articlesData);
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleAuthor, setNewArticleAuthor] = useState("");
  const [newArticleContent, setNewArticleContent] = useState("");
  const [newArticleCategory, setNewArticleCategory] = useState("categoria");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArticle = {
      id: Date.now(),
      title: newArticleTitle,
      author: newArticleAuthor,
      content: newArticleContent,
      category: newArticleCategory,
    };

    setArticles([...articles, newArticle]);
    setNewArticleTitle("");
    setNewArticleAuthor("");
    setNewArticleContent("");
    setNewArticleCategory("categoria");
  };

  return (
    <div className="App">
      <h1>Lista Articoli</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>
              <strong>Autore:</strong> {article.author}
            </p>
            <p>
              <strong>Categoria:</strong> {article.category}
            </p>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>

      <h2>Aggiungi un nuovo contenuto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo dell'contenuto"
          value={newArticleTitle}
          onChange={(e) => setNewArticleTitle(e.target.value)}
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
        />
        <select
          value={newArticleCategory}
          onChange={(e) => setNewArticleCategory(e.target.value)}
        >
          <option value="categoria"> -</option>
          <option value="Old">Old</option>
          <option value="New">New</option>
        </select>
        <button type="submit">Aggiungi contenuto</button>
      </form>
    </div>
  );
}

export default App;
