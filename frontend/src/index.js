import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin';
import "react-toastify/dist/ReactToastify.css"
// import chats from './pages/Chats';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Create from './pages/Create';
import ThriftDetails from './pages/Thrift';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<App/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/chats' element={<chats />}/>
        <Route path='/thrift/:id' element={<ThriftDetails />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
