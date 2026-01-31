import React, { useEffect, useState } from 'react'
import BG1 from './assets/BG1.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const [Blogs, setBlogs] = useState([])
  const authorId = localStorage.getItem("authorId");

  useEffect(() => {
    axios.get(`https://servermyblog-p74i.onrender.com/Blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err))
  })

  const [Authors, setAuthors] = useState([])
  useEffect(() => {
    axios.get(`https://servermyblog-p74i.onrender.com/Authors`)
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err))
  })
  return (
    <section style={{
      backgroundImage: `linear-gradient(rgba(114, 180, 189, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>

      <div className='container-fluid text-center p-5 d-flex flex-column justify-content-center align-items-center' style={{ height: '60vh' }}>
        <h1 className='display-4 fw-bold'>"Welcome to my Blog"</h1>
        <p className='lead fw-normal mt-3'>"Share your stories. Discover new ideas. Connect with the world."</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/Blogs">
            <button className='btn btn-dark'>Explore Blogs</button>
          </Link>
          {authorId ? (
            <Link to="/author/dashboard/addblog">
              <button className="btn btn-outline-info text-white fw-semibold">
                Create Blog
              </button>
            </Link>
          ) : (
            <Link to="/author">
              <button className="btn btn-outline-info text-white fw-semibold">
                 Create Blog
              </button>
            </Link>
          )}

        </div>


      </div>



      {/* section 2 */}

      <div className='container py-5'>

        {/* --- Page Header --- */}
        <div className='text-center mb-5'>
          <h2 className='fw-bold'>Featured Blogs</h2>
          <p className='text-muted'>Discover inspiring stories and ideas from our authors</p>
        </div>


        <div className='row'>
          {
            Blogs.slice(0, 3).map((Blog, index) => {
              return (
                <div className='col-md-4 mb-4' key={index}>
                  <div className='card  shadow-sm h-100'>
                    <img src={Blog.image} className='card-img-top h-100 ' alt='Healthy Living' />
                    <div className='card-body'>
                      <h5 className='card-title'>{Blog.title}</h5>
                      <p className='text-muted small'>By {Blog.author} | {Blog.category}</p>
                      <p className='card-text'>{Blog.description}</p>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
        <div className=' d-flex justify-content-center align-items-center text-center'>
          <Link to={`/blogs`}>
            <button className='btn btn-dark mt-3'>View More</button>
          </Link>
        </div>


      </div>




      {/* ✨ Section 3: Categories */}
      <div className="container my-5">
        <h2 className="text-center mb-2 fw-bold">📂 Categories</h2>
        <p className="text-center lead fw-semibold m-4">
          Explore blogs by your favorite topics. Find articles on travel, technology, health, lifestyle, and more.
        </p>

        {/* Categories buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <button className="btn btn-outline-info text-white fw-semibold">
            ✈️ Travel <br /> Discover new places and adventures
          </button>
          <button className="btn btn-outline-info text-white fw-semibold">
            🍏 Health <br /> Tips for wellness and fitness
          </button>
          <button className="btn btn-outline-info text-white fw-semibold">
            🌿 Lifestyle <br /> Minimalism, habits, and inspiration
          </button>
        </div>

      </div>


      {/* ✨ Section 4: Authors */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">✍️ Our Authors</h2>
        <div className="row justify-content-center mt-3">
          {
            Authors.slice(0, 3).map((Author, index) => {
              return (
                <div className="col-lg-4 text-center mb-4">
                  <img src={Author.image} className="rounded-circle mb-2" alt={Author.name} width="200" height="200" />
                  <h5 className='fw-bold'>{Author.name}</h5>
                  <p className="lead fw-semibold">{Author.role}</p>
                  <Link to="/blogs">
                    <button className="btn btn btn-dark">View Blogs</button>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>



    </section>

  )
}

export default Home
