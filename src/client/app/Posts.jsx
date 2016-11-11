import React from 'react';
import PostItem from './PostItem.jsx';

const Posts = (props) => {

  const postItems = props.posts.map((post) => {
    return (
      <PostItem
        key={post.data.id}
        post={post.data}
      />
    );
  });
  
  return (
    <div>
      <ul style={{marginRight: '35px'}}>
        {postItems}
      </ul>
      <div style={{textAlign: 'center', paddingBottom: '2em'}}>
        <button className="btn btn-primary" onClick={() => { props.loadSubreddit(props.subreddit, props.sortby, true); }} >LOAD MORE</button>
      </div>
    </div>
  );
  
};

export default Posts;
