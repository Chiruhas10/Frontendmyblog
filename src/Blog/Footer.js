import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div className='container-fluid p-5' style={{ backgroundColor: '#e3f2fd' }}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4  text-start '>
                    <div>
                    <h4 className=' fw-bold mb-3 '> 📝MyBlog</h4>
                    <p className=' fw-semibold'>“A space to read, write, and share your stories. <br />
                    Share your story, explore new ideas, connect with readers.”</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='fw-bold'>Follow Us</h4>
                        <i className="bi bi-facebook fs-4 me-3 text-primary"></i>
                        <i className="bi bi-twitter fs-4 me-3 text-info"></i>
                        <i className="bi bi-instagram fs-4 me-3 text-danger"></i>
                        <i className="bi bi-linkedin fs-4 me-3 text-primary"></i>
                        <i className='bi bi-youtube fs-4 me-3 text-danger'></i>
                    </div>
                </div>

            
                <div className='col-lg-4'>
                    <h4 className='fw-bold mb-3'>Quick Links</h4>
                    <ul className='list-unstyled'>
                        <li className='mb-2'><NavLink to='/' className='text-decoration-none text-dark fw-semibold'>Home</NavLink></li>
                        <li className='mb-2'><NavLink to='/blogs' className='text-decoration-none text-dark fw-semibold'>Blogs</NavLink></li>
                        <li className='mb-2'><NavLink to='/about' className='text-decoration-none text-dark fw-semibold'>About</NavLink></li>
                        <li className='mb-2'><NavLink to='/contact' className='text-decoration-none text-dark fw-semibold'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className='col-lg-4 text-start'>
                    <h4 className='fw-bold mb-3'>Contact Us 📞</h4>
                    <p className='fw-semibold mb-1'> 📍 123 Blog Street, Blog City, BL 12345</p>
                    <p className='fw-semibold mb-1'>📧 Email: chiruhas10@gmail.com</p>
                </div>

            </div>

            <hr />

            <div className='text-center mt-4'>
                <p className='fw-bold'>©{new Date().getFullYear()} MyBlog. All rights reserved.</p>
            </div>
        </div>
    </div>)

export default Footer
