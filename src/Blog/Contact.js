import React, { useState } from 'react';

const Contact = () => {
  const [Details, setDetails] = useState({ name: "", email: "", mobile: "" })
  const changeDetails = (e) => {
    const {name, value} = e.target
    setDetails({ ...Details, [name]: value })
  }
  const submitHandler = (e) => {
    e.preventDefault();

    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');

    const { name, mobile, email } = Details;

    const alphaExp = /^[a-zA-Z\s]+$/;
    const mobileExp = /^[0-9]{10}$/;
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (name === '') {
      nameError.textContent = '*Name is required';
    } else {
      if (name.match(alphaExp)) {
        nameError.textContent = '';
      } else {
        nameError.textContent = '*Name must be alphabetic';
      }
    }

    // Mobile validation
    if (mobile === '') {
      mobileError.textContent = '*Mobile number is required';
    } else {
      if (mobile.match(mobileExp)) {
        mobileError.textContent = '';
      } else {
        mobileError.textContent = '*Mobile number must be 10 digits';
      }
    }

    // Email validation
    if (email === '') {
      emailError.textContent = '*Email is required';
    } else {
      if (email.match(emailExp)) {
        emailError.textContent = '';
      } else {
        emailError.textContent = '*Email is not valid';
      }
    }

    if(
      nameError.textContent === '' &&
      emailError.textContent === '' &&
      mobileError.textContent === ''
    ){
      alert("Form submitted succesfully")
      setDetails({name:'', email:'', mobile:''})
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <form onSubmit={submitHandler}>
            <input type='text' name='name' value={Details.name} className='form-control mb-3' onChange={changeDetails} placeholder='Enter you name' />
            <p id="nameError" className="text-danger mb-2 text-start"></p>
            <input type='email' name='email' value={Details.email} className='form-control mb-3' onChange={changeDetails}  placeholder='Email Address' />
            <p id="emailError" className="text-danger mb-2 text-start"></p>
            <input type='phone' name='mobile' value={Details.mobile} className='form-control mb-3' onChange={changeDetails} placeholder='Mobile Number' />
            <p id="mobileError" className="text-danger mb-2 text-start"></p>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6 mt-5 mt-md-0">
          <h5 className="fw-bold mb-3">Get in Touch</h5>
          <p><i className="bi bi-envelope me-2"></i> myblog@gmail.com</p>
          <p><i className="bi bi-telephone me-2"></i> +91 98765 43210</p>
          <p><i className="bi bi-geo-alt me-2"></i> Hyderabad, India</p>

          <h6 className="fw-bold mt-5 mb-4">Follow Us</h6>

          <i className="bi bi-instagram me-3"></i>
          <i className="bi bi-twitter-x me-3"></i>
          <i className="bi bi-facebook me-3"></i>
          <i className="bi bi-linkedin me-3"></i>
          <i className="bi bi-youtube me-3"></i>

        </div>
      </div>
    </div>
  );
}

export default Contact;
