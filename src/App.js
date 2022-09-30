import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect,useState } from "react";
import Home from './component/Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './component/Pages/Add';
import Register from './component/Register/register';
import Login from './component/Login/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setLoginUser] = useState({})

  // useEffect(() => {
  //   const items = localStorage.getItem('');
  //   if (items) {
  //     setLoginUser(items);
  //   }
  // }, []);

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} ></Route>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/addTransaction' element={<Add />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
