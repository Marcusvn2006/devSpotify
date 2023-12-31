import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'

import Erro from './routes/erro.jsx';
import Home from './routes/home.jsx';
import Busc from './routes/busc/busc.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro/>,
    children: [
      { path: "/", element: <Home/>},
      { path: "/busc", element: <Busc/>},
   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <RecoilRoot> */}
    <RouterProvider router={router} />
    {/* </RecoilRoot> */}
  </React.StrictMode>
)
