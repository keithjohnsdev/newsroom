import React, { useState, useEffect } from "react";
import "./App.css";
import Toolbar from "./Components/Toolbar";
import NewsFeed from "./Components/NewsFeed";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("a");
  const [newspaper, setNewspaper] = useState("everything");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/${newspaper}?q=${query}&apiKey=1a881093b682450fb11bd1e334b0c68a`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
        setArticles(actualData.articles);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, newspaper]);

  const searchArticles = (searchTerm) => {
    if (searchTerm.length === 0) {
      setQuery("a");
    }
    else {setQuery(searchTerm);}
  };

  const changeNewspaper = (paper) => {
    setNewspaper(paper);
  }

  console.log(articles);

  return (
    <div className="App">
      <Toolbar searchArticles={searchArticles} changeNewspaper={changeNewspaper} />
      <NewsFeed newspaper={newspaper} articles={articles} loading={loading} />
    </div>
  );
}

export default App;
