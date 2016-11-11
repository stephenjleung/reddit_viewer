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
    // For endless scrolling
    this.handleScroll = this.handleScroll.bind(this);
    
  }

  // Main search function to get posts
  loadSubreddit(term, criteria, loadmore) {

    // Allow for multiple subreddits, space delimited
    if (term) {
      term = term.replace(' ', '+');
    }

    // Default to sorting by 'hot'
    if (!criteria) {
      criteria = 'hot';
    }
    this.setState({sortby: criteria});

    // Save 'this' for inside Axios call
    var context = this;
    
    var apiUrl = 'https://www.reddit.com/r/';

    // If no search term, get reddit homepage
    if (!term) {
      apiUrl = 'https://www.reddit.com/';
      term = '';
    }

    // console.log('loadmore is ', loadmore);
    if (loadmore) {
      var lastItem = this.state.posts[this.state.posts.length - 1].data.name;
      // console.log('the last item is: ', lastItem);
      var after = '?after=' + lastItem;
    } else {
      var after = '';
    }

    var fullUrl = apiUrl + term + '/' + criteria + '.json' + after;

    // If search term is less than 3 chars, don't GET. Too short.
    if (term && (term.length < 3)) {
      return;
    } else {
      this.setState({subreddit: term});
    }

    // Get search results
    axios.get(fullUrl)
      .then(function(response) {
        // console.log(response.data.data.children);

        if (loadmore) {
          context.setState({
            posts: context.state.posts.concat(response.data.data.children)
          });  
        } else {
          context.setState({
            posts: response.data.data.children
          });        
        }

      })
      .catch(function(error) {
        console.log(error);
      });

  }

  componentDidMount() {
    // Perform GET of homepage on page load.
    this.loadSubreddit();

    // For endless scrolling
    window.addEventListener('scroll', this.handleScroll);
  }

  // For endless scrolling
  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.loadSubreddit(this.state.subreddit, this.state.sortby, true);
    } else {
      // console.log('not at bottom yet');
    }
  }

  render () {
    // To limit Axios calls during live-search
    const loadSubreddit = _.debounce((term, criteria, loadmore) => { this.loadSubreddit(term, criteria, loadmore); }, 300);
    return (
      <div style={{background: '#fffcf2', marginTop: '-20px'}}>
        <Header />
        <Subheader />
        <SearchBar onSearchTermChange={loadSubreddit.bind(this)} />
        <SortBy changeSort={loadSubreddit.bind(this)} term={this.state.subreddit} sortby={this.state.sortby} />
        <Posts posts={this.state.posts} loadSubreddit={loadSubreddit.bind(this)} subreddit={this.state.subreddit} sortby={this.state.sortby}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
