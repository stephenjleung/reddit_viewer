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

  loadSubreddit(term, criteria, loadmore) {

    if (term) {
      term = term.replace(' ', '+');
    }

    if (!criteria) {
      criteria = 'hot';
    }
    this.setState({sortby: criteria});

    // Save this for inside axios call
    var context = this;
    
    var apiUrl = 'https://www.reddit.com/r/';

    // If no search term, get reddit homepage
    if (!term) {
      apiUrl = 'https://www.reddit.com/';
      term = '';
    }


    console.log('loadmore is ', loadmore);
    if (loadmore) {
      var lastItem = this.state.posts[this.state.posts.length - 1].data.name;
      console.log('the last item is: ', lastItem);
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
        console.log(response.data.data.children);

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

  }

  render () {
    // To limit Axios calls during live-search
    const loadSubreddit = _.debounce((term, criteria, loadmore) => { this.loadSubreddit(term, criteria, loadmore); }, 300);
    return (
      <div>
        <Header />
        <Subheader />
        <SearchBar onSearchTermChange={loadSubreddit.bind(this)} />
        <SortBy changeSort={loadSubreddit.bind(this)} term={this.state.subreddit} sortby={this.state.sortby} />
        <Posts posts={this.state.posts} />
        <button onClick={() => { loadSubreddit(this.state.subreddit, this.state.sortby, true); }} >LOAD MORE</button>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));