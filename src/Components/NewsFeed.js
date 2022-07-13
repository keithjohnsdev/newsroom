import React from "react";
import classes from "./NewsFeed.module.css";
import NewsItem from "./NewsItem";

const NewsFeed = (props) => {
  return (
    <div className={classes.NewsFeed}>
      <h2>{(props.newspaper === "everything") ? 'ALL NEWS' : 'TOP HEADLINES'}</h2>
      <div className={`container ${classes.feed}`}>
        {props.loading && <h4>Loading Articles...</h4>}
        {!props.loading && props.articles.length === 0 && (
          <h4>Sorry, no articles match your search.</h4>
        )}
        <ul>
          {props.articles.map((article, index) => {
            return (
              <li key={index}>
                <NewsItem
                  url={article.url}
                  title={article.title}
                  image={article.urlToImage}
                  description={article.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsFeed;
