import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Blog = () => {
    const {blogID} = useParams();
    const blogurl = `https://public-api.wordpress.com/rest/v1/sites/ppo0ed0e0e7e4dd.wordpress.com/posts/${blogID}`;

    const [blog, setBlog] = useState({});
    
    useEffect(()=>{
      fetch(blogurl)
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(err => console.log(err))
    }, []);
    
  return (
    <>
        <Navbar />
        <iframe title="blog" src={blog.URL} width="100%" height="100%"></iframe>
        <Footer />
    </>
  )
}

export default Blog
