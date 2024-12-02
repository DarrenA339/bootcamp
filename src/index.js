import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDuPJRObNvj7B7b407kDIQF0kI5c8MADBM",
  authDomain: "cardviewer-7bda2.firebaseapp.com",
  databaseURL: "https://cardviewer-7bda2-default-rtdb.firebaseio.com",
  projectId: "cardviewer-7bda2",
  storageBucket: "cardviewer-7bda2.firebasestorage.app",
  messagingSenderId: "755272628110",
  appId: "1:755272628110:web:9dd2a07f8fec13a85756df"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

