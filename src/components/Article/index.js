import React, {Component} from 'react';
import './style.scss';


export default class Index extends Component {
  state={
    isOpen: false
  };

  render() {
    const {article}=this.props;
    const content=this.state.isOpen && article.content;
    const shortDescription= <p>{article.shortContent}</p>;
    return (
      <article className="article">
        <header className="article__header">
          <time className="article__time">01/01/2018</time>
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'Hide' : 'Show'}
          </button>
        </header>
        <h2 className="article__header">{article.title}</h2>
        <div className="article__short-content">

          {this.state.isOpen ? '' : shortDescription}

        </div>
        <div className="article__body">
          {content}
        </div>
        <footer className="article__footer">
          <span className="article__author" rel="author">{article.author}</span>
          <time className="article__time">01/01/2018</time>
        </footer>
      </article>
    );
  }

  handleClick=() => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}