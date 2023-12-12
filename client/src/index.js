import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store'; 
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App /> 
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
