import { useEffect, useState } from "react";
import Blog from '../components/blog/Blog'
import Loading from '../images/loading.gif'

const BLOG_URL = 'https://dev.to/api/articles?username=jacquelinelam'

function BlogPostsContainer() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    fetch(BLOG_URL)
    .then(r => r.json())
    .then(rJSON => {
      setBlogPosts(rJSON);
      setIsLoaded(true);
    })
    .catch(() => alert("Can’t access response from dev.to API. Blocked by browser?"))
  },[])

  return (
    <div id='blog-container' className='component'>
      <h1>BLOG</h1>
      <>
      {
        isLoaded ?
          <Blog blogPosts={blogPosts} />
          :
          <img src={Loading} alt='loading' />
      }
      </>
    </div>
  )
}

export default BlogPostsContainer;
