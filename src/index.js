import React from 'react';
import ReactDOM from 'react-dom';
//import TestPaginate from './TestPaginate';
//import Pagination from "./Pagination";
import RepoSearch from './RepoSearch'
//import SearchForm from './SearchForm'

import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';

ReactDOM.render(
  <React.StrictMode>
    <RepoSearch />
  </React.StrictMode>,
  document.getElementById('root')
);

