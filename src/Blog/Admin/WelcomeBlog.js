import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeBlog = () => {
    return (
        <div className='container-fluid p-5'>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                <h1 className="fw-bold mb-3 mx-auto">Welcome Admin 👋</h1>
                <p className="lead fw-normal mb-3 mx-auto text-center">
                    Manage your blogs, view posts, and update content easily from the dashboard.
                </p>
                <Link to={'viewblog'}>
                <button className="btn btn-primary mt-3 mx-auto">Go to Blog Posts</button>
                </Link>
            </div>

        </div>
    )
}

export default WelcomeBlog
