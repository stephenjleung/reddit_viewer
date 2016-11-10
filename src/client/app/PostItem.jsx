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
          <a href={post.url} target='_blank'>
            <img className="media-object" style={{minWidth: '140px', textAlign: 'center', borderRadius: '6px'}} src={ (imageUrl.substring(0, 4) !== 'http' ) ? altImage : imageUrl } alt="No Thumbnail Provided" />
          </a>
        </div>
        <div className="media-body media-middle">
          <div className="media-heading"><h4><a href={post.url} target='_blank'>{post.title}</a></h4></div>
          <p>submitted by {post.author} to /r/{post.subreddit}</p>
          <p><a href={'https://www.reddit.com' + post.permalink} target='_blank'>{post.num_comments} comments</a></p>
        </div>
      </div>
    </li>
  );
};

export default PostItem;