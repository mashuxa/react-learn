import React, {PureComponent} from 'react';
import Article from '../Article';
import './style.scss';


export default class ArticleList extends PureComponent {
  state={
    openArticleId: null
  };

  render() {
    const articleElements=this.props.articles.map((article, index) => {
      return (
        <li className="article-list__item" key={article.id}>
          <Article article={article} isOpen={this.state.openArticleId === article.id}
                   onButtonClick={this.handleClick.bind(this, article.id)}/>
        </li>
      );
    });
    return (
      <ul className="article-list">
        {articleElements}
      </ul>
    );
  }

  handleClick=openArticleId => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
  });


}