import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from "./App" ;
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;
import { UesrProvider } from './context/user.context' ;
import { CategoryProvider } from './context/category.context' ;
import { CartProvider } from './context/cart.context' ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UesrProvider>
      <CategoryProvider>
        <CartProvider>
          <Router>
            <Routes>
                <Route path='/*' element={<App />} />      
            </Routes>
          </Router>
        </CartProvider>
      </CategoryProvider>
    </UesrProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function;
// to log results (for example: reportWebVitals(console.log));
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals;

reportWebVitals();
