import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import LogIn from './layouts/LogIn/LogIn';
import Register from './layouts/Register/Register';
import AddTouristSpot from './layouts/AddTouristSpot/AddTouristSpot';
import Home from './Home/Home';
import AuthProvider from './Context/AuthProvider';
import AllTouristSpot from './layouts/AllTouristSpot/AllTouristSpot';
import ViewDetails from './layouts/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/log-in",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add-tourist-spot",
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path:'/all-tourist-spot',
        element:<AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path:'/view-details/:id',
        element:<ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
