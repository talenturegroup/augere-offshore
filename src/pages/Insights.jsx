import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './Insights.css'
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const Insights = () => {
  const blogTitles = [
    '10 Biggest Semi-Submersible Rigs',
    'Nigeria’s Deepwater Oil Legacy: A Journey Through Time',
    'The Future of Deepwater Oil and Gas in Nigeria: Challenges and Opportunities',
    'The Evolution of Drillship Rig Generations',
    'Behind the scenes of Deepwater Drilling Technology, Teamwork and Precicion',
    'Navigating Compliance in Nigeria’s Deepwater Oil and Gas Sector',
    'Pioneering Sustainability in Deepwater Drilling'
  ];

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
            blogs.map((blog, index) => (
              <div style={{width: '100%'}}>
                <Link to={"/insights/" + blog.ID} key={index}>
                  <div className="blog-container">
                      <img src={blog.featured_image} alt="" />
                      <div className="text">
                          <h3>{blog.title}</h3>
                          <div className="info">
                            {new Date(blog.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </div>
                      </div>
                  </div>
                </Link>
                <br />
                <br />
                <div className="blog-container">
                  <video controls>
                    <source src={`blog-vid${index + 1}.mp4`} type='video/webm'/>
                  </video>
                  <div className="text">
                    <h3>{blogTitles[index]}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Insights
