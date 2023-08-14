import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function AddUser() {
    
    let navigate=useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit= async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user)
    navigate("/")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-3">
          <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
          </div>
          <div className="mb-3">
          <label htmlFor="Name" className="form-label">
                username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
          </div>
          <div className="mb-3">
          <label htmlFor="Name" className="form-label">
                email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
          </div>
          <button type="submit" className="btn btn-outline-primary shadow">
            submit
          </button>
          <Link  className="btn btn-outline-danger shadow mx-2" to='/'>
            cancel
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
