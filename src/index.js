import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Landing from './Landing';
import Hprofiles from './homepage/Hprofiles';
import Home from './Home';
import Hdetails from './homepage/Hdetails';
import Hadd from './adminpage/Hadd';
import Dashboard from './adminpage/Dashboard';
import Addbeds from './adminpage/Addbeds';
import "../node_modules/bootstrap/dist/js/bootstrap";
import Bookappointment from './homepage/Bookappointment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children:[
      {
        path: "",
        element: <Landing/>,

      children:[
        {
          path: "",
          element: <Home/>
        },
        {
          path: "/hprofiles",
          element: <Hprofiles/>
        },
        {
          path: "/hdetails/:hid",
          element: <Hdetails/>
        },
        {
          path: "/admin",
          element: <Dashboard/>,
          children:[
            {
              path: "/admin/add-hospital",
              element: <Hadd/>
            },
            {
              path: "/admin/add-beds",
              element: <Addbeds/>
            }
          ]
        },
        {
          path: "/:hname/BookAppointment/:hid",
          element: <Bookappointment/>
        }
      ],
    },
      // {
      //   path: "/home",
      //   element: <Hprofiles/>
      // },
],
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    {/* <App/> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
