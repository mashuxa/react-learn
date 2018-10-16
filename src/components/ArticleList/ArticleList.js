import React from 'react';
import Article from '../Article/Article';


export default function ArticleList({articles}) {
  const articleElement=articles.map(article => {
    return <li className="article-list__item" key = {article._id}><Article article={article}/></li>;
  });
  return (
    <ul className="article-list">
      {articleElement}
    </ul>
  );
}