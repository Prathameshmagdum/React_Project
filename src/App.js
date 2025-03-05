import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Error from "./Component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import ResturantMenu from "./Component/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const applayout = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      },
      {
        path:"/restaurant/:resId",
        element:<ResturantMenu/>
      }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={applayout}/>);