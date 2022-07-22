import React from 'react';
import ReactDOM from 'react-dom';
import RepoSearch from './RepoSearch'
import SearchForm from './SearchForm'
import HashRouter from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';

ReactDOM.render(
  <React.StrictMode>
    <RepoSearch />
    <SearchForm />
  </React.StrictMode>,
  document.getElementById('root')
);