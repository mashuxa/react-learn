import React, {Component} from 'react';
// import {render} from 'react-dom';


export default class Article extends Component {
  state={
    isOpen: true
  };

  render() {
    const {article}=this.props;
    const content=this.state.isOpen && article.content;
    return (
      <article className="article">
        <header className="article__header">
          <time>01/01/2018</time>
        </header>
        <h2 className="article__header">{article.title}</h2>
        <div className="article__short-content">
          <p>Some short content</p>
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        <div className="article__body">
          {content}
        </div>
        <footer className="article__footer">
          <time>01/01/2018</time>
          <span className="article__author" rel="author">{article.author}</span>
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