import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = [
  {
    title:"Jay",
    date:"2016"
  },
  {
    title:"Battle",
    date:"2015"
  },
]


ReactDOM.render(
  <App data={data} test="Hello"/>,
  document.getElementById('root')
);
