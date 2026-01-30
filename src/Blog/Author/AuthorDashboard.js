import React, { useContext, useEffect, useState } from 'react'
import BG1 from '../assets/BG1.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { store } from '../../App'
import axios from 'axios'


const AuthorDashboard = () => {
  const [data, setData] = useState("");
  const [token, setToken] = useContext(store);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/author");
    }
  }, [token, navigate]);
  useEffect(() => {
    axios.get("https://servermyblog-p74i.onrender.com/author/dashboard", {
      headers: {
        "x-token": token
      }
    })
      .then((res) => {
        setData(res.data);

      })
      .catch((err) => {
        console.log(err);

      })
  }, [])

  return (
    <div className='container-fluid'>
      <div className='row '>
        <aside className='col-lg-3'>
          <Link to={''} className='text-decoration-none'>
            <h1 className='fw-semi-bold '>{data} Dashboard</h1>
          </Link>
          <Link to={'addblog'} className='text-decoration-none'>
            <button className='fw-semibold my-3'>Add Blog</button>
          </Link>
          <Link to={'viewblog'} className='text-decoration-none'>
            <button className='fw-semibold my-3'>View Blog</button>
          </Link>
          <Link to={'/author'} className='text-decoration-none'>
            <button className='fw-semibold my-3'>Logout</button>
          </Link>
        </aside>
        <div className='col-lg-9 d-flex justify-content-center align-items-center text-center' style={{
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

export default AuthorDashboard
