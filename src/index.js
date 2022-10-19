import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase code
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyDy1aYx2gzjjOta_ftP7UHmKrK1athamYY',
  authDomain: 'my-react-blog-lesson.firebaseapp.com',
  projectId: 'my-react-blog-lesson',
  storageBucket: 'my-react-blog-lesson.appspot.com',
  messagingSenderId: '765945022334',
  appId: '1:765945022334:web:846b26599fdd02f697d52f',
};

const app = initializeApp(firebaseConfig);
// firebase code end

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
