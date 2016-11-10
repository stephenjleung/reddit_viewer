import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { term: ''};
  }


  render() {
    return (
      <div style={{textAlign: 'center', paddingBottom: '1.5em'}}>
        <h3>
        <input 
          placeholder="Enter Subreddit(s) Here"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          style={{}}
        />
        </h3>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;