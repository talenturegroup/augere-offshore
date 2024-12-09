import React, { useState, useEffect } from 'react'
import './Home.css'
import bgvideo from '../assets/video.mp4'
import vid1 from '../assets/blog-vid1.mp4'
import vid2 from '../assets/blog-vid2.mp4'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [news, setNews] = useState([]);
  const [blog1, setBlog1] = useState({});
  const [blog2, setBlog2] = useState({});
  const [loading, setLoading] = useState(true);

  const newsurl = `https://content.guardianapis.com/search?q=oil%20and%20gas&api-key=a0b17842-e04f-4a9d-8e7a-5a4ba5b616df`;
  const blogurl = 'https://public-api.wordpress.com/rest/v1/sites/ppo0ed0e0e7e4dd.wordpress.com/posts';

  useEffect(()=>{
    fetch(newsurl)
    .then(response => response.json())
    .then(data => setNews(data.response.results.slice(0,3)))
    .catch(err => console.log(err))
  }, []);

  
  useEffect(()=>{
    fetch(blogurl)
    .then(response => response.json())
    .then(data => {
      // setBlogs(data.posts.slice(0,3));
      setBlog1(data.posts[0]);
      setBlog2(data.posts[1]);
      setLoading(false)
    })    
    .catch(err => console.log(err));

  }, [])

  return (
    <>
      <section className="hero">
        <video src={bgvideo} autoPlay loop muted/>
        <h1>PIONEERING OFFSHORE AND DEEPWATER DRILLING SERVICES IN WEST AFRICA</h1>
        <a href="./about"><button>Read More</button></a>
      </section>

      <section className="section-2">
        <div className="prices">
          <h2>Capability</h2>
          <div className="figures">
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <h3><span className="psi">{counterOn && <CountUp start={0} end={20000} duration={2} delay={0}/>}</span><span>PSI Well Control System</span></h3>
              <h3><span className="hc">{counterOn && <CountUp start={0} end={4000000} duration={2} delay={0}/>} lbs</span><span>Hosting Capacity</span></h3>
              <h3><span className="dd">{counterOn && <CountUp start={0} end={40000} duration={2} delay={0}/>} ft</span><span>Drilling Depth</span></h3>
            </ScrollTrigger>
          </div>
        </div>

        <div className="about">
          <h2>About the Company</h2>
          <p>Augere Offshore Services Limited (AOSL) stands at the forefront of the Offshore and Deepwater drilling sector in West Africa, offering innovative and sustainable solutions to the oil and gas industry.</p>
          <Link to="/about"><button>Read More</button></Link>
        </div>

        <div className="news">
          <h2>Latest News</h2>
          {news.map((article, index) => 
          (
            <a href={article.webUrl} target='_blank' rel="noreferrer" key={index}>
              <p>{new Date(article.webPublicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <b>{article.webTitle}</b>
            </a>
          ))}
        </div>
      </section>

      <div className="insights-section">
        <h2>Insights</h2>
            {
              loading ? <AiOutlineLoading3Quarters className='loading'/> :
              <div className="insights">
                <Link to={"/insights/" + blog1.ID} className='blog-container'>
                    <img src={blog1.featured_image} alt="" />
                    <div className="text">
                        <h3>{blog1.title}</h3>
                        {/* <div className="info">
                          {new Date(blog1.modified).toLocaleDateString('en-US', { year:'numeric', month: 'long', day: 'numeric' })}
                        </div> */}
                    </div>
                </Link>
                <div className="blog-container">
                    <video controls>
                      <source src={vid2} type='video/webm'/>
                    </video>
                    <div className="text">
                      <h3>Nigeria’s Deepwater Oil Legacy: A Journey Through Time</h3>
                    </div>
                </div>
                <div className="blog-container">
                    <video controls>
                      <source src={vid1} type='video/webm'/>
                    </video>
                    <div className="text">
                      <h3>10 Biggest Semi-Submersible Rigs</h3>
                    </div>
                </div>
                <Link to={"/insights/" + blog2.ID} className='blog-container'>
                    <img src={blog2.featured_image} alt="" />
                    <div className="text">
                        <h3>{blog2.title}</h3>
                        {/* <div className="info">
                          {new Date(blog1.modified).toLocaleDateString('en-US', { year:'numeric', month: 'long', day: 'numeric' })}
                        </div> */}
                    </div>
                </Link>
              </div>
            }
            <Link to="/insights" className='insights-link'><button>Read More</button></Link>
      </div>


      <article className="newsletter">
            <form action="">
                <h1>Sign up for email updates</h1>
                <input type="text" id="name" placeholder="Name"/>
                <input type="email" name="" id="email" placeholder="Email"/>
                <button type="submit">Submit</button>
            </form>
      </article>
    </>
  )
}

export default Home