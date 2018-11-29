import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchForm from './components/SearchForm';
import Routes from './Routes';


document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('api_key')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Routes  />,
    document.body.appendChild(document.createElement('div')),
  )
})

// ReactDOM.render(Routes, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
