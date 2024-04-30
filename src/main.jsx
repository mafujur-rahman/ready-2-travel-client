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
import PrivateRoute from './Route/PrivateRoute';
import Error from './layouts/Error/Error';
import ListPage from './layouts/ListPage/ListPage';
import CountrySpot from './layouts/CountrySpot/CountrySpot';
import UpdateSpot from './layouts/UpdateSpot/UpdateSpot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://ready-2-travel-server.vercel.app/spot'),
        
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
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path:'/all-tourist-spot',
        element:<AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('https://ready-2-travel-server.vercel.app/spot')
      },
      {
        path:'/view-details/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://ready-2-travel-server.vercel.app/spot/${params.id}`)
      },
      {
        path:'/country-spot/:id',
        element:<CountrySpot></CountrySpot>,
        loader: ({params}) => fetch(`https://ready-2-travel-server.vercel.app/spot/${params.id}`)
      },
      {
        path:'/list-page',
        element:<PrivateRoute><ListPage></ListPage></PrivateRoute>,
        loader: () => fetch(`https://ready-2-travel-server.vercel.app/spot`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`https://ready-2-travel-server.vercel.app/spot/${params.id}`)
      },
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
