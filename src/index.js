import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnqscbB-ZTAgYPinS4Xte9zIRWMbc7-1w",
    authDomain: "quirkycart-3396d.firebaseapp.com",
    projectId: "quirkycart-3396d",
    storageBucket: "quirkycart-3396d.appspot.com",
    messagingSenderId: "746153178875",
    appId: "1:746153178875:web:f1d4bf66660319e53a225e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

