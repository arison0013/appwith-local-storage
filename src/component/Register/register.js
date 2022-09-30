import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { environment } from "../../environment/environment";

const Register = () => {
  const navigate = useNavigate('/login');
  const changePage = () => {
    navigate('/')
  }
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reEnterPasswordError, reEnterPasswordErrror] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      axios.post(environment.apiUrl + 'register', user).then((res) => {
        toast.success(res.data.message,{autoClose:'2000'})
        navigate('/')
      }).catch((err) => {
        toast.warn(err.response.data.message,{
          autoClose:2000,
        });
      })
    }
  }
  const validate = () => {
    let name = user.name;
    let email = user.email;
    let password = user.password;
    let reEnterPassword = user.reEnterPassword
    if (name == "") {
      setNameError(true);
    } else if (!name.match(/[a-zA-Z]/)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,8}$/)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (reEnterPassword != password) {
      reEnterPasswordErrror(true);
    } else {
      reEnterPasswordErrror(false);
      if (name && email && password) {
        register();
      }
    }
  }
  return (
    <>
      <div className="main">
        <div className="register">
          {console.log("User", user)}
          <h1>Register</h1>
          <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input><span className="Span-color">{nameError ? "Enter name in aplhabetical order" : ""}</span>
          <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input><span className="Span-color">{emailError ? "Enter valid email" : ""}</span>
          <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input><span className="Span-color">{passwordError ? "password length 8 and atleast one character " : ""}</span>
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input><span className="Span-color">{reEnterPasswordError ? "password not match" : ""}</span>
          <div className="button" onClick={validate}>Register</div>
          <div>or</div>
          <div className="button" onClick={changePage}>Login</div>
        </div>
      </div>
    </>
  );
};
export default Register;
