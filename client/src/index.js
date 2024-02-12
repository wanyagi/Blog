import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store'; 
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';

const container = document.getElementById('root'); 

ReactDOM.hydrateRoot(
  container, 
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);
