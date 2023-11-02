import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/navbar/navbar';
import Menu from './pages/menu';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar key={1}></Navbar>, <Dashboard key = {2}></Dashboard>],
  },
  {
    path: '/menu',
    element: [<Navbar key={1}></Navbar>, <Menu key = {2}></Menu>],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)