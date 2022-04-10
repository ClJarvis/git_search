import React from 'react';
import ReactDOM from 'react-dom';
import UserSearchForm from './UserSearchForm';
import Pagination from "./Pagination";

//import reportWebVitals from './reportWebVitals';
//import GitSearch from './GitSearch'

import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';

ReactDOM.render(
  <React.StrictMode>
    <UserSearchForm />
  </React.StrictMode>,
  document.getElementById('root')
);

