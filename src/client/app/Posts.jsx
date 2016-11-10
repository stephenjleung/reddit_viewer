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
    <ul style={{marginRight: '35px'}}>
      {postItems}
    </ul>
  );
  
};

export default Posts;
