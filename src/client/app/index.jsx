// npm run build runs Webpack in production mode, 
// which minimizes the bundle file automatically, 
// and the command npm run dev runs the Webpack 
// in the watch mode.

// npm run dev

import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Subheader from './Subheader.jsx';
import SearchBar from './SearchBar.jsx';
import SortBy from './SortBy.jsx';
import Posts from './Posts.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddit: null,
      posts: [],
      sortby: 'hot'
    };
    
  }

  loadSubreddit(term, criteria) {

    if (term) {
      term = term.replace(' ', '+');
    }

    if (!criteria) {
      criteria = 'hot';
    }
    this.setState({sortby: criteria});

    var context = this;
    
    var apiUrl = 'https://www.reddit.com/r/';


    // If no search term, get reddit homepage
    if (!term) {
      apiUrl = 'https://www.reddit.com/';
      term = '';
    }

    var fullUrl = apiUrl + term + '/' + criteria + '.json';

    // If search term is less than 3 chars, don't GET. Too short.
    if (term && (term.length < 3)) {
      return;
    } else {
      this.setState({subreddit: term});
    }

    // console.log(fullUrl);
    // console.log(this.state);
    // console.log(term);
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

  // changeSort(criteria) {
  //   // Adjust sort criteria and reload posts
  //   this.loadSubreddit(this.state.subreddit, criteria);
  // }

  componentDidMount() {
    // Perform GET of homepage on page load.
    this.loadSubreddit();
  }


  render () {
    return (
      <div>
        <Header />
        <Subheader />
        <SearchBar onSearchTermChange={this.loadSubreddit.bind(this)} />
        <SortBy changeSort={this.loadSubreddit.bind(this)} term={this.state.subreddit} sortby={this.state.sortby} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));