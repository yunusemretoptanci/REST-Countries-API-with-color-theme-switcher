import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Header from './Header';
import { StateProvider } from "./StateProvide";
import reducer, { initialState } from "./reducer";
const DetailPage=()=>{
  return<div>
  <Header />
  <Detail />
  </div>
}

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="detail" element={<DetailPage />} />
    </Routes>
    </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
