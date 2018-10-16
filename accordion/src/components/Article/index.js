import React, {PureComponent} from 'react';
import './style.scss';


export default class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //    return this.state.isOpen !== nextState.isOpen
  // }

  // componentWillMount() {
  //
  // }
  //
  // componentWillUpdate() {
  //
  // }

  // componentWillReceiveProps(nextProps){
  //   if (nextProps.defaultOpen !== this.props.defaultOpen) {
  //     return this.setState({
  //       isOpen: nextProps.defaultOpen
  //     });
  //   }
  // }

  render() {
    const {article, isOpen, onButtonClick}=this.props;
    const content=isOpen && article.content;
    const shortDescription=<p>{article.shortContent}</p>;
    return (
      <article className="article">
        <header className="article__header">
          <time className="article__time">01/01/2018</time>
          <button onClick={onButtonClick}>
            {isOpen ? 'Hide' : 'Show'}
          </button>
        </header>
        <h2 className="article__header">{article.title}</h2>
        <div className="article__short-content">
          {isOpen ? '' : shortDescription}
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




}