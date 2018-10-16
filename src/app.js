import React from 'react';
import ArticleList from './ArticleList';
import articles from '../content/articles'

export function App() {
  return (
    <div>
      <h1>Last articles</h1>
      <ArticleList article = {articles} />
    </div>
  );
}
