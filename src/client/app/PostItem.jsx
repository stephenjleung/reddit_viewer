import React from 'react';

const PostItem = ({post}) => {
    
  const imageUrl = post.thumbnail;
  
  return (
    <li className="list-group-item">
      <div className="">
        <div className="media-left">
            <img className="media-object" style={{minWidth: '140px'}} src={ (imageUrl === 'self' || imageUrl === 'default') ? null : imageUrl } alt="No Thumbnail Provided" />
        </div>
        <div className="media-body">
            <div className="media-heading">{post.title}</div>
        </div>
      </div>
    </li>
  );
};

export default PostItem;