import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import AuthProvider from './Context/AuthContext';
import ApiProvider from './Context/ApiProvider';
import Navbar from './Components/Navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
    <ApiProvider>
      <Navbar />
      <App />
    </ApiProvider>
  </AuthProvider>
  </BrowserRouter>
);