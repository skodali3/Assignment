import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {safeSearch: 'Off', textFormat: 'Raw'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2b3e7d3a78mshe029b343c4bfa5ep1dccb4jsn8be54c3c0535',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

class APIComponent extends React.Component{
  render(){
    {axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });} 

    return (
      <p Col xs={3}> Api is succesfully included in console </p>
    );
  }
}
root.render(
  <React.StrictMode>
    <App />
    <br></br>
    <APIComponent></APIComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
