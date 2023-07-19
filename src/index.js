import React from 'react';
import ReactDOM from 'react-dom';
import dataReducer from "./slices";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';



// Création du store via Redux Toolkit
const store = configureStore({
  reducer: {
    data: dataReducer
  }
});



const Root = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

