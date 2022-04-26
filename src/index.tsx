import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {CssBaseline} from '@mui/material';
import {Provider} from 'react-redux';
import {setupStore} from './store/store';

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <CssBaseline/>
    <App />
  </Provider>
);
