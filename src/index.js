import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>   
    {/* //provider is redux providing wrapper((but context we create provider as wrapper)) &&
    store contains the initial vale */}
    <Counter/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
