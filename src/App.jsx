import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import  Navbar  from './components/Navbar';
import  Home  from './components/Home';
import Login from './components/Login';
function App() {

  return (
    <div className="App">
       <Navbar/>
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes> */}
      <Login />
    </div>
  );
}

export default App;
