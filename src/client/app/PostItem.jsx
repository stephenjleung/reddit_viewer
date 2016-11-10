import React from 'react';

const PostItem = ({post}) => {
    
  const imageUrl = post.thumbnail;
  const altImage = 'http://vignette3.wikia.nocookie.net/ensemble-stars/images/1/10/Reddit.png/revision/latest?cb=20151110193005';
  
  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" style={{width: '100px', textAlign: 'center'}} src={ (imageUrl === 'self' || imageUrl === 'default') ? altImage : imageUrl } alt="No Thumbnail Provided" />
        </div>
        <div className="media-body">
          <div className="media-heading">{post.title}</div>
        </div>
      </div>
    </li>
  );
};

export default PostItem;