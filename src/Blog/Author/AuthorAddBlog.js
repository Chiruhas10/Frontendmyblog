import axios from 'axios'
import React, { useState } from 'react'

const AddBlog = () => {
  const [Blog, setBlog] = useState({title:"", author:"", category:"", description:"", image:"", date:"", content:""})
  const updateBlog = (e)=>{
    const {name, value} = e.target
    setBlog({...Blog, [name]:value})
  }
  const SubmitHandler = (e)=>{
    e.preventDefault()
    const authorId = localStorage.getItem("authorId"); 
    console.log(Blog)
    axios.post(`https://servermyblog-p74i.onrender.com/Blogs`, {...Blog, authorId: authorId})

    .then(()=>
      {
        alert('Blog Added Successfully')
        setBlog({title:"", author:"", category:"", description:"", image:"", date:"", content:""})
        
      })  
    .catch((err)=>console.log(err))
  }
  return (
    <div className='container p-5'>
        <div className='text-center p-5 col-lg-6 mx-auto shadow-lg'>
            <h1 className='display-6 fw-bold mb-5'>Add New Blog</h1>
            <form onSubmit={SubmitHandler}>
                <input type='text' className='form-control mb-3' name='title' value={Blog.title} onChange={updateBlog} placeholder='Title' />
                <input type='text' className='form-control mb-3' name='author' value={Blog.author} onChange={updateBlog} placeholder='Author' />
                <input type='text' className='form-control mb-3' name='category' value={Blog.category} onChange={updateBlog} placeholder='Category' />
                <input type='text' className='form-control mb-3' name='description' value={Blog.description} onChange={updateBlog} placeholder='Description' />
                <input type='text' className='form-control mb-3' name='image' value={Blog.image} onChange={updateBlog} placeholder='Image' />
                <input type='text' className='form-control mb-3' name='date' value={Blog.date} onChange={updateBlog} placeholder='Date' />
                <textarea className='form-control mb-3' name='content' value={Blog.content} onChange={updateBlog} placeholder='Content' rows={5}></textarea>
                <button className='btn btn-primary w-100'>Add Blog</button>
            </form>

        </div>
      
    </div>
  )
}

export default AddBlog
