import Moment from 'react-moment';

function BlogPost ({ blogPost }) {
  const renderTags = blogPost.tag_list.map((tag, idx) => (
    <span key={idx} className='badge' pill variant='dark'>{tag}</span>
  ));

  return (
    <div className='blog post-block-container'>
      <div className= 'post-block-white'>
        <div className='card'>
          <div className="card-body">
            <img src={blogPost.cover_image} />
            {renderTags}
            <h4 className="card-title">{blogPost.title}</h4>
            <p className="card-text">{blogPost.description}}</p>
            <button
              className="btn btn-danger btn-lg"
              onClick={() => window.open(blogPost.url, "_blank")}>
              READ POST
            </button>
          </div>
          <div class="card-footer text-muted">
            <small>
              Posted on <Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost;