import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewDetails = () => {
  const { id } = useParams()
  const [Blog, setBlog] = useState({})
  const [loading, setLoading] = useState(true)
  const [comment, setComment] = useState('')
  const [commentsList, setCommentsList] = useState([])

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://servermyblog-p74i.onrender.com/Blogs/${id}`)
      .then((res) => {
        setBlog(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h3 className="text-center p-5">Loading blog...</h3>
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment])
      setComment('')
    }
  }

  return (
    <div className="container p-5">
      <h2 className="display-6 fw-bold text-start">{Blog.title}</h2>

      <div className="row">
        <div className="col-lg-6">
          <h4 className="fw-semibold text-start my-4">
            By : <em className="fw-bold" style={{ color: '#1a90e5ff' }}>{Blog.author}</em>
          </h4>

          <h5 className="fw-semibold text-start">Category : {Blog.category}</h5>

          <p className="text-muted fw-semibold text-start my-4">{Blog.content}</p>

          <h4 className="text-start text-muted">Comments</h4>

          <form onSubmit={submitHandler}>
            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <ul className="list-group mt-3">
            {commentsList.map((cmt, index) => (
              <li key={index} className="list-group-item">{cmt}</li>
            ))}
          </ul>
        </div>

        <div className="col-lg-6 p-5">
          <img
            src={Blog.image || "https://via.placeholder.com/400"}
            alt={Blog.title}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  )
}

export default ViewDetails
