import React, { useState } from 'react'

const EditBlog = () => {
    const [Blog, setBlog] = useState({name:"", author:"", category:"", description:"", image:"", date:"", content:""})
      const EditBlog = (e)=>{
        const {name, value} = e.target
        setBlog({...Blog, [name]:value})
      }
      const SubmitHandler = (e) =>{
        e.preventDefault()
      }
  return (
    <div className='container p-5'>
        <div className='text-center col-lg-6 mx-auto shadow-lg p-5'>
            <h1 className='display-6 fw-bold'>Edit Blog</h1>
            <form onSubmit={SubmitHandler}>
                <input type='text' className='form-control mb-3' name='title' value={Blog.title} onChange={EditBlog} placeholder='Title' />
                <input type='text' className='form-control mb-3' name='author' value={Blog.author} onChange={EditBlog} placeholder='Author' />
                <input type='text' className='form-control mb-3' name='category' value={Blog.category} onChange={EditBlog} placeholder='Category' />
                <input type='text' className='form-control mb-3' name='description' value={Blog.description} onChange={EditBlog} placeholder='Description' />
                <input type='text' className='form-control mb-3' name='image' value={Blog.image} onChange={EditBlog} placeholder='Image' />
                <input type='text' className='form-control mb-3' name='date' value={Blog.date} onChange={EditBlog} placeholder='Date' />
                <textarea className='form-control mb-3' name='content' value={Blog.content} onChange={EditBlog} placeholder='Content' rows={5}></textarea>
                <button className='btn btn-primary w-100'>Edit Blog</button>
            </form>

        </div>
      
    </div>
  )
}

export default EditBlog
