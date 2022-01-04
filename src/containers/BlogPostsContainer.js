import { useEffect, useState } from "react";
import Loading from '../images/loading.gif'
import icon from '../images/blog-icon.png';
// import Blog from '../components/blog/Blog'
import BlogPost from '../components/BlogPost';

const BLOG_URL = 'https://dev.to/api/articles?username=jacquelinelam'

function BlogPostsContainer() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(BLOG_URL)
      .then(r => r.json())
      .then(rJSON => {
        setBlogPosts(rJSON);
        setIsLoaded(true);
      })
      .catch(() => alert("Can’t access response from dev.to API. Blocked by browser?"))
  }, [])

  const blogPostList = blogPosts.map((blogPost) => (
    <BlogPost key={blogPost.id} blogPost={blogPost} />
  ));

  return (
    <div id='blog-container' className='component'>
      <div className='title-with-icon'>
        <img src={icon} alt='blog icon' />
        <h1>BLOG</h1>
      </div>
      <>
        {
          isLoaded ?
            blogPostList
            :
            <img src={Loading} alt='loading' />
        }
      </>
    </div>
  )
}

export default BlogPostsContainer;
