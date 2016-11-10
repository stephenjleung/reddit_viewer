import React from 'react';

const PostItem = ({post}) => {
    
  const imageUrl = post.thumbnail;
  const altImage = 'http://vignette3.wikia.nocookie.net/ensemble-stars/images/1/10/Reddit.png/revision/latest?cb=20151110193005';
  
  return (
    <li className="list-group-item">
      <div className="media">

        <div className="media-left media-middle" style={{minWidth: '50px', textAlilgn: 'center'}}>
          <h4>{post.score}</h4>
        </div>
        <div className="media-left media-middle">

          <img className="media-object" style={{minWidth: '140px', textAlign: 'center', borderRadius: '6px'}} src={ (imageUrl.substring(0, 4) !== 'http' ) ? altImage : imageUrl } alt="No Thumbnail Provided" />
        </div>
        <div className="media-body media-middle">
          <div className="media-heading"><h4>{post.title}</h4></div>
          <p>submitted by {post.author} to /r/{post.subreddit}</p>
          <p>{post.num_comments} comments</p>


        </div>
      </div>
    </li>
  );
};

export default PostItem;