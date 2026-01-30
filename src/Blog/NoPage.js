import React from 'react'
import Error from './assets/Error.jpg'

const NoPage = () => {
  return (
    <div className='container-fluid text-center p-5'
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Error})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <h1 className='display-1 fw-bold text-white'>404 - Not Found</h1>
      <p className='lead fw-normal text-white'>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NoPage
