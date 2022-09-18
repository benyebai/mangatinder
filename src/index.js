import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RecPage from './recPage';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

  <div>
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="recommend" element={<RecPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
