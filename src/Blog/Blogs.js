import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blogs = () => {

  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])

  const [category, setCategory] = useState("all")
  const [author, setAuthor] = useState("all")

  // 🔹 Fetch blogs once
  useEffect(() => {
    axios.get("https://servermyblog-p74i.onrender.com/Blogs")
      .then((res) => {
        setBlogs(res.data)
        setFilteredBlogs(res.data) // show all initially
      })
      .catch((err) => console.log(err))
  }, [])

  // 🔹 Apply filters
  useEffect(() => {
    let result = blogs

    if (category !== "all") {
      result = result.filter(blog => blog.category === category)
    }

    if (author !== "all") {
      result = result.filter(blog => blog.author === author)
    }

    setFilteredBlogs(result)
  }, [category, author, blogs])

  return (
    <div className='container py-5'>

      {/* --- Page Header --- */}
      <div className='text-center mb-5'>
        <h2 className='fw-bold'>All Blogs</h2>
        <p className='text-muted'>
          Discover inspiring stories and ideas from our authors
        </p>
      </div>

      {/* --- Filters --- */}
      <div className='col-md-6 col-lg-4 mx-auto mb-4 d-flex justify-content-between gap-3'>
        
        <select
          className='form-select mb-3'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Health">Health</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Travel">Travel</option>
        </select>

        <select
          className='form-select mb-3'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="all">All Authors</option>
          <option value="Kavita Joshi">Kavita Joshi</option>
          <option value="Rahul Mehta">Rahul Mehta</option>
          <option value="Priya Sharma">Priya Sharma</option>
        </select>

      </div>

      {/* --- Blog Cards --- */}
      <div className='row'>
        {
          filteredBlogs.length > 0 ? (
            filteredBlogs.map((Blog, index) => (
              <div className='col-md-4 mb-4' key={index}>
                <div className='card shadow-sm h-100'>
                  
                  <img
                    src={Blog.image}
                    className='card-img-top h-100'
                    alt={Blog.title}
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>{Blog.title}</h5>

                    <p className='small'>
                      By <span className='fw-bold'>{Blog.author}</span>
                      {" "} | {Blog.category}
                    </p>

                    <p className='card-text'>{Blog.description}</p>

                    <p className='small'>
                      <span className='fw-bold'>Published on:</span> {Blog.date}
                    </p>
                  </div>

                  <div className='card-footer text-center bg-white mb-3'>
                    <Link to={`/viewdetails/${Blog._id}`}>
                      <button className='btn btn-outline-dark'>
                        View Details
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-muted'>
              No blogs found
            </p>
          )
        }
      </div>

    </div>
  )
}

export default Blogs
