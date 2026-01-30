import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorRegister = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
  });

 
  const navigate = useNavigate();

  const changeDetails = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post("https://servermyblog-p74i.onrender.com/Authors", details)
      .then((res) => {
        alert("Registration Successful");
        setDetails({ name: "", email: "", password: "" });
        navigate("/author"); // redirect to author login
      })
      .catch((err) => {
        alert("Error during registration");
        console.error(err);
      });
  };

  return (
    <div className="container p-5">
      <div className="text-center col-lg-6 mx-auto p-5 shadow-lg">
        <h1 className="display-6 fw-bold mb-3">Author Register</h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={details.name}
            onChange={changeDetails}
            className="form-control mb-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={details.email}
            onChange={changeDetails}
            className="form-control mb-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={details.password}
            onChange={changeDetails}
            className="form-control mb-3"
            required
          />

         

          <button className="btn btn-primary mt-3 w-100" type="submit">
            Register
          </button>

          
        </form>
      </div>
    </div>
  );
};

export default AuthorRegister;
