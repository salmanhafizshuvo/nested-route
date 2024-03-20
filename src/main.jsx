import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contract from './Components/Contract/Contract.jsx';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
     {
      path: '/about',
      element:<About></About>
     },
     {
      path:'/contract',
      element: <Contract></Contract>
     },
     {
      path:'/users',
      loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
     }
    ]
  },
 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
