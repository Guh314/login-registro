import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';

//const express = require('express');
//const app = express();
//const port = 3305;
//
//app.use(express.json);
//
//app.listen(port, () => {
//    console.log(`App listening on port:${port}`);
//});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
