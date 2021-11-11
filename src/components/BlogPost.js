import Moment from 'react-moment';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function BlogPost ({ blogPost }) {
  const renderTags = blogPost.tag_list.map((tag, idx) => (
    <span key={idx} className='badge' pill variant='dark'>{tag}</span>
  ));

  return (
    <div className='blog post-block-container'>
      <div className='post-block-white'>
        <Card>
          <Card.Body>
            <Card.Img variant='top' src={blogPost.cover_image} ></Card.Img>
            <Card.Title>{blogPost.title}</Card.Title>
            {renderTags}<br />
            <Card.Text>{blogPost.description}</Card.Text>
            <button className="btn btn-danger btn-lg" onClick={() => window.open(blogPost.url, "_blank")}>READ POST</button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Posted on <Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></small>
          </Card.Footer>
        </Card>
      </div>
      <div className='post-block-color'></div>
    </div >
  )
};

export default BlogPost;