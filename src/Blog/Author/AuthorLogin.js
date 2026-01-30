import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../../App';

const AuthorLogin = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [token, setToken] = useContext(store);
  const navigate = useNavigate();

  const changeDetails = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://servermyblog-p74i.onrender.com/Authors/login", details)
      .then((res) => {
        setToken(res.data.token)
      })
      .catch((err) => {
        setError("Invalid email or password");
      });
  };

  if(token){
    navigate("/author/dashboard");  
  }


  return (
    <div className="container p-5">
      <div className="text-center col-lg-6 mb-4 mx-auto p-5 shadow-lg">
        <h1 className="display-6 fw-bold mb-3">Author Login</h1>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={details.email}
            onChange={changeDetails}
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={details.password}
            onChange={changeDetails}
            className="form-control mb-3"
            required
          />
          <button className="btn btn-primary mt-3" type="submit">
            Login
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}

          <p className="mt-3">
            New Author?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/authorregister")}
            >
              Register here
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default AuthorLogin;
