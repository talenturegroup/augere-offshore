import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './Insights.css'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Insights = () => {

    const blogurl = 'https://public-api.wordpress.com/rest/v1/sites/ppo0ed0e0e7e4dd.wordpress.com/posts'

    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
      fetch(blogurl)
      .then(response => response.json())
      .then(data => {
        setBlogs(data.posts)
        setLoading(false)
    }
    )
      .catch(err => console.log(err))
    }, [])
  return (
    <>
    <Navbar/>
    <section className="insights-title">
        <h1>Insights</h1>

        <div className="blogs">
            
            {
            loading ? <AiOutlineLoading3Quarters className='loading'/> :
            blogs.map((blog, index)=>(
                <Link to={"/insights/" + blog.ID} key={index}>
                    <div className="blog-container">
                        <img src={blog.featured_image} alt="" />
                        <div className="text">
                            <h3>{blog.title}</h3>
                            <div className="info">{new Date(blog.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            <div className="content">{parse(blog.excerpt)}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Insights
