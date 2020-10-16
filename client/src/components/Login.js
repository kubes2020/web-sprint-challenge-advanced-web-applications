import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    console.log('test handleSubmit')
    axios.post("http://localhost:5000/api/login", credentials)
    .then((res) =>{
        console.log("res from login", res)
        window.localStorage.setItem('token', res.data.payload)
        history.push("/")
    })
    .catch((err) =>{
        console.log("Bad error with login", err)
    })
  }


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:
        <input 
        name="username"
        id="username"
        value={credentials.username}
        onChange={handleChange}
        ></input>
        </label>
        <label htmlFor="password">Password:
        <input 
        name="password"
        id="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
        ></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
