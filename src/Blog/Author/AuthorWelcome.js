import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthorWelcome = () => {
  return (
    <div className='container-fluid p-5'>
            <div className='container'>
                <h1 className="fw-bold mb-3 mx-auto">Welcome Author 👋</h1>
                <p className="lead fw-normal mb-3 mx-auto text-center">
                    Manage your blogs, view posts, and update content easily from the dashboard.
                </p>
                <NavLink to={'/ViewBlogs'}>
                  <button className="btn btn-primary mt-3 mx-auto">Go to Blog Posts</button>
                </NavLink>
            </div>

        </div>
  )
}

export default AuthorWelcome
