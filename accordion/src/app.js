import React, {PureComponent} from 'react';
import ArticleList from './components/ArticleList';
import articles from './content/articles';


export class App extends PureComponent {
  state={
    reverted: false
  };

  render() {
    return (
      <div>
        <h1>Last articles</h1>
        <button className="btn" onClick={this.revert}>Revert</button>
        <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
      </div>
    );
  };

  revert=() => {
    this.setState({
      reverted: !this.state.reverted
    });
  };
}
