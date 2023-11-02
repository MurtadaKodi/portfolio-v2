import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NorthenHouse from './components/pages/north.jsx';
import ShopArea from './components/pages/shop-area.jsx';
import SouthHouse from './components/pages/south.jsx';
import Page4 from './components/pages/page4.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/north",
    element: <NorthenHouse/>,
  },
  {
    path: "/shop-area",
    element: <ShopArea/>,
  },
  {
    path: "/south",
    element: <SouthHouse/>,
  },
  {
    path: "/Page4",
    element: <Page4/>,
  },


  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
