import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './app';
import PrivateRoute from './pages/privateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
