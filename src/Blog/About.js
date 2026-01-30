import React from 'react'
import aboutImg from './assets/About.jpeg'

const About = () => {
  return (
    <div className='container py-5'>
      <div className='text-center mb-5'>
        <h2 className=' display-6 fw-bold'>About MyBlog</h2>
        <p className='lead fw-normal'>Share your stories. Discover new ideas. Connect with the world.</p>
      </div>

      
      <div className='row align-items-center'> 
        <div className='col-md-6 mb-4 mb-md-0'>
          <img 
            src={aboutImg} 
            alt='About MyBlog' 
            className='img-fluid rounded shadow-sm'
          />
        </div>

      
        <div className='col-md-6'>
          <h4 className='fw-semibold mb-3 display-5'>Our Story</h4>
          <p className='fw-normal'>
            MyBlog is a creative platform designed for writers, readers, and thinkers from all walks of life. 
            It allows authors to share their experiences, ideas, and stories, while readers can explore new perspectives and learn from diverse voices.
          </p>
          <p className='fw-normal'>
            Our mission is simple — to build a space where everyone can express freely, connect meaningfully, and inspire others. 
            From travel and health to technology and lifestyle, MyBlog brings together a world of ideas in one place.
          </p>
        </div>
      </div>
      
      <hr  className='py-3 mt-3'/>
      <div className='text-center  p-5'>
        <h4 className=' display-6 fw-bold mb-4'>Our Values</h4>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <h5>📝 Expression</h5>
            <p className='text-muted'>We believe every story has the power to inspire and connect people across the globe.</p>
          </div>
          <div className='col-md-4 mb-3'>
            <h5>🌍 Community</h5>
            <p className='text-muted'>A place for readers and writers to come together, learn, and grow collectively.</p>
          </div>
          <div className='col-md-4 mb-3'>
            <h5>💡 Inspiration</h5>
            <p className='text-muted'>We aim to spark curiosity and motivate creativity through shared knowledge and stories.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
