import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { environment } from "../../environment/environment";

const Login = () => {
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/register')
    }
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const login = () => {
        axios.post(environment.apiUrl + "login", user,).then((res) => {
           
                localStorage.setItem("token", res.data.token)
                console.log(res.data.message)
                toast.success(res.data.message)
                navigate('/home')
          
        }).catch((e) => { toast.error(e.response.data.message, { autoClose: 2000 }) })
    }



    const validate = () => {
        let email = user.email;
        let password = user.password;
        let pattern = /^[A-Za-z._]{3,}@[A-Za-z._]{3,}[.]{1}[A-Za-z]{2,6}$/;
        if (email == "") {
            setEmailError(true);
        } else if (!email.match(pattern)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if (password == "") {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            if (email) {
                login();
            }
        }
    }

    return (
        <>
            <div className="main">
                <div className="login">
                    {console.log("User", user)}
                    <h1>login</h1>
                    <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} /><span className="Span-color">{emailError ? "Enter valid email" : ""}</span>
                    <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} /><span className="Span-color">{passwordError ? "Enter password" : ""}</span>
                    <div className="button" onClick={validate}>Login</div>
                    <div>or</div>
                    <div className="button" onClick={changePage}>Register</div>
                    {/* <ToastContainer autoClose={2000}/> */}
                </div>
            </div>
        </>
    );
}
export default Login;