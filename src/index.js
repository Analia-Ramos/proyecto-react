import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBFqlcAthi73WCrSQtczxP5mzAkrV9I97w",
  authDomain: "ecommerce-coderhouse-407f6.firebaseapp.com",
  projectId: "ecommerce-coderhouse-407f6",
  storageBucket: "ecommerce-coderhouse-407f6.appspot.com",
  messagingSenderId: "404233583036",
  appId: "1:404233583036:web:cb7523cc739c737b7d53b9",
  measurementId: "G-E879SVG7E8"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

