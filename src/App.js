import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from './component/Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './component/Pages/Add';
import Register from './component/Register/register';
import Login from './component/Login/login';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './protectedRoute';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [user, setLoginUser] = useState({})

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
          <Route exact path='/register' element={<ProtectedRoute Component={Register} />} />
          <Route exact path='/home' element={<ProtectedRoute Component={Home} />}></Route>
          <Route exact path='/addTransaction' element={<ProtectedRoute Component={Add} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
