import React from 'react'
import BG1 from '../assets/BG1.jpg'
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <div className='row '>
        <aside className='col-lg-3'>  
          <Link to={''} className='text-decoration-none'>
            <h1 className='fw-semi-bold '>Dashboard</h1>
          </Link>
          <Link to={'addblog'} className='text-decoration-none'>
            <button className='fw-semibold my-3'>Add Blog</button>
          </Link>
          <Link to={'viewblog'} className='text-decoration-none'>
            <button className='fw-semibold my-3'>View Blog</button>
          </Link>
          <Link to={'/admin'} className='text-decoration-none'>
            <button className='fw-semibold my-3'>Logout</button>
          </Link>
        </aside>
        <div className='col-lg-9 p-5' style={{
          backgroundImage: `linear-gradient(rgba(136, 206, 214, 0.82), rgba(0, 0, 0, 0.5)), url(${BG1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Dashboard
