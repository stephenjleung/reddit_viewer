// npm run build runs Webpack in production mode, 
// which minimizes the bundle file automatically, 
// and the command npm run dev runs the Webpack 
// in the watch mode.

// npm run dev

import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Posts from './Posts.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddit: null,
      posts: []
    };
    
  }

  loadSubreddit(term) {

    var apiUrl = 'https://www.reddit.com/r/';

    axios.get(apiUrl + term + '.json')
      .then(function(response) {
        console.log(response.data.data.children);
        this.setState({
          posts: response.data.data.children
        });
      })
      .catch(function(error) {
        console.log(error);
      });
      
  }


  render () {
    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange={this.loadSubreddit} />
        <Posts />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));