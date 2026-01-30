import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className='container-fluid p-3 sticky-top'  style={{ backgroundColor: '#e3f2fd' }}>
            <div className='container ' >
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <h1 className='display-6 fw-bold'> 📝MyBlog</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto fw-semibold">
                                <li className="nav-item me-3">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link" aria-current="page" to="/Blogs">Blogs</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link" to="/Contact ">Contact</Link>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header
