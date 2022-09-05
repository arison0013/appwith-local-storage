import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './component/Layout/Topbar'
import Home from './component/Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './component/Add';

function App() {
  return (   
    <BrowserRouter>
      <Topbar />
        <Routes>
          <Route exact path='' element={<Home/>}></Route>
          <Route exact path='/addTransaction' element={<Add/>} ></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
