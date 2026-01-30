import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewBlogs = () => {
    const [Blogs, setBlogs] = useState([]);
    const [Blog, setBlog] = useState({});
    useEffect(() => {
        axios.get(`https://servermyblog-p74i.onrender.com/Blogs`)
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log(err))
    })
    const deleteBlog = (Bid) => {
        axios.delete(`https://servermyblog-p74i.onrender.com/Blogs/${Bid}`)
            .then(() => alert('Blog Deleted Successfully'))
            .catch((err) => console.log(err))
    }
    const editBlog = (Bid) => {
        axios.get(`https://servermyblog-p74i.onrender.com/Blogs/${Bid}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.log(err))
    }
    const updateBlog = (e)=>{
    const {name, value} = e.target;
    setBlog({...Blog, [name]:value});  
  }
  const SubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`https://servermyblog-p74i.onrender.com/Blogs/${Blog._id}`, Blog)
      .then(() => alert('Blog Updated Successfully'))
      .catch((err) => console.log(err))
  }
    return (
        <div className='container p-5'>
            <h1>Blogs: {Blogs.length}</h1>
            <div className="row">
                {
                    Blogs.map((Blogs, index) => {
                        return (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card h-100 shadow">

                                    <img
                                        src={Blogs.image}
                                        alt={Blogs.title}
                                        className="card-img-top"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{Blogs.title}</h5>
                                        <p className="card-text text-muted">
                                            {Blogs.category} | <em className='fw-bold'>{Blogs.author}</em>
                                        </p>
                                        </div>
                                        <div className='card-footer '>                                          
                                        <button className="btn btn-primary me-3 px-4" data-bs-toggle="modal" data-bs-target="#edit" onClick={() => editBlog(Blogs._id)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger px-4" onClick={() => deleteBlog(Blogs._id)}>
                                            Delete
                                        </button>
                                        </div>
                                    
                                </div>
                            </div>
                        )
                    })}
            </div>

            <div className='modal fade' id='edit'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title fw-bold p-3'>Edit Blog</h4>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={SubmitHandler}>
                                <input type='text' className='form-control mb-3' name='title' value={Blog.title} onChange={updateBlog} placeholder='Title' />
                                <input type='text' className='form-control mb-3' name='author' value={Blog.author} onChange={updateBlog} placeholder='Author' />
                                <input type='text' className='form-control mb-3' name='category' value={Blog.category} onChange={updateBlog} placeholder='Category' />
                                <input type='text' className='form-control mb-3' name='description' value={Blog.description} onChange={updateBlog} placeholder='Description' />
                                <input type='text' className='form-control mb-3' name='image' value={Blog.image} onChange={updateBlog} placeholder='Image' />
                                <input type='text' className='form-control mb-3' name='date' value={Blog.date} onChange={updateBlog} placeholder='Date' />
                                <textarea className='form-control mb-3' name='content' value={Blog.content} onChange={updateBlog} placeholder='Content' rows={5}></textarea>
                                <button type='submit' className='btn btn-primary w-100' data-bs-dismiss="modal">Update Blog</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewBlogs
