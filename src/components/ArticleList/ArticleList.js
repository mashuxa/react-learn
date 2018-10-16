import React from 'react';
import Article from '../components/Article';


export default function ArticleList({articles}) {
  const articleElement=articles.map(article => {
    return <li key = {article._id}><Article article={article}/></li>;
  });
  return (
    <ul>
      {articleElement}
    </ul>
  );
}