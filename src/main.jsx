import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NorthenHouse from './pages/1-north.jsx';
import SouthHouse from './pages/2-palace.jsx';
import Page4 from './pages/5-page4.jsx';
import Emrair from './pages2/5-emrair.jsx';
import Site from './pages2/1-site.jsx';
import Fort from './pages2/3-fort.jsx';
import Palace from './pages/2-palace.jsx';
import PalaceVideo from './pages/2-palace-video.jsx';
import Souq from './pages/4-souq.jsx';
import PagesHero from './pages/pages-hero.jsx';
import Near from './pages2/7-near.jsx';
import NorthBook from './pages/north-book.jsx';

// import ImageGallery from './pages2/gallery‏.jsx';

// import { myProject } from 'components/3-main/myProjects.js';



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
    path: "/south",
    element: <SouthHouse/>,
  },
  
  {
    path: "/souq",
      element: <Souq/>,
    },
  {
    path: "/Page4",
    element: <Page4/>,
  },

  {
    path: "/fort",
    element: <Fort/>,
  },
  {
    path: "/site",
    element: <Site/>,
  },
  
  {
    path: "/emrair",
    element: <Emrair/>,
  },
  
  {
  path: "/near",
    element: <Near/>,
  },
  {
    path: "/palace",
      element: <Palace/>,
    },
  {
    path: "/palace-video",
      element: <PalaceVideo/>,
    },
    {
      path: "/north-book",
        element: <PagesHero/>,
      },
      {
        path: "/north-book",
          element: <NorthBook/>,
        },
        

      

    


  

  
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
