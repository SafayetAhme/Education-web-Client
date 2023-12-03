import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Pages/Route/Routes.jsx';
import Home from './Pages/Home/Home.jsx';
import AllClass from './Pages/All Class/AllClass.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Details from './Pages/details/Details.jsx';
import Privateroute from './Pages/Route/Privateroute.jsx';
import AddtoCart from './Pages/AddtoCart/AddtoCart.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Allusers from './Pages/dashboard/Allusers.jsx';
import Adminhome from './Pages/dashboard/Adminhome.jsx';
import Additems from './Pages/dashboard/Additems.jsx';
import Manageitems from './Pages/dashboard/Manageitems.jsx';
import Updateitems from './Pages/dashboard/Updateitems.jsx';
import Payment from './Pages/dashboard/Payment.jsx';
import Paymenthistory from './Pages/dashboard/Paymenthistory.jsx';
import UserPaymenthistory from './Pages/dashboard/UserPaymenthistory.jsx';
const queryClient = new QueryClient()



const router = createBrowserRouter([
  // user routes
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allclass",
        element: <AllClass></AllClass>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/userdash",
        element: <UserPaymenthistory></UserPaymenthistory>
      },
      {
        path: "/addtocart",
        element: <Privateroute><AddtoCart></AddtoCart></Privateroute>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Privateroute><Dashboard></Dashboard></Privateroute>,
    children: [
      {
        path: 'adminhome',
        element: <Adminhome></Adminhome>
      },
      {
        path: 'additems',
        element: <Additems></Additems>
      },
      {
        path: 'paymenthhistory',
        element: <Paymenthistory></Paymenthistory>
      },
      {
        path: 'manageitems',
        element: <Manageitems></Manageitems>
      },
      {
        path: 'updateitems/:id',
        element: <Updateitems></Updateitems>,
        loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`)
      },
      {
        path: 'allusers',
        element: <Allusers></Allusers>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
