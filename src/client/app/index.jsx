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

    var context = this;
    var apiUrl = 'https://www.reddit.com/r/';
    var fullUrl = apiUrl + term + '.json';

    // If no search term, get reddit homepage
    if (!term) {
      fullUrl = 'https://www.reddit.com/.json';
    }

    // If search term is less than 3 chars, don't GET. Too short.
    if (term && (term.length < 3)) {
      return;
    }

    // Get search results
    axios.get(fullUrl)
      .then(function(response) {
        console.log(response.data.data.children);
        context.setState({
          posts: response.data.data.children
        });
      })
      .catch(function(error) {
        console.log(error);
      });

  }

  componentDidMount() {
    // Perform GET of homepage on page load.
    this.loadSubreddit();
  }


  render () {
    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange={this.loadSubreddit.bind(this)} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));