import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import Cart from './pages/cart';
import Promo from './pages/promo';
import Account from './pages/account';
import SearchResult from './pages/searchResult';
import { PageDetail } from './pages/detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/promo",
    element: <Promo />
  },
  {
    path: "/account",
    element: <Account />
  },

  {
    path: "/search/:query/:id",
    element: <SearchResult />
  },
  {
    path: "/detail/:id",
    element: <PageDetail />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
