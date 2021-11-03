import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import App from './App';
import {FavesContextProvider} from './store/favorites-context';

ReactDOM.render(
  <FavesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavesContextProvider>,
  document.getElementById('root')
);
