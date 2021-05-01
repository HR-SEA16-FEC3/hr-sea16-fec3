import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/100' render={()=>(<div>bro</div>)} />
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('App'),
);
