import BlogPost from './BlogPost';

// Presentational component to receive props from blogPostsContainer
// update based on prop changes or if parent component re-renders
// obj destructuring used to extract out values from props
function Blog({ blogPosts }) {
  const blogPostList = blogPosts.map(blogPost => {
    return <BlogPost key={blogPost.id} blogPost={blogPost} />
  })

  return (
    <div className='component'>
      {blogPostList}
    </div>
  );
}

export default Blog;