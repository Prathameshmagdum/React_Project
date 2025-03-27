import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Error from "./Component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import ResturantMenu from "./Component/RestaurantMenu";
import UserContext from "./Component/UserContext";
// import Shimmer from "./Component/Shimmer";

const Grocery = lazy(()=> import("./Component/Grocery"));


const AppLayout = () => {
  const [userName,setUserName] = useState();
  //Authentication
  useEffect(()=>{
    //API CALL
    const data ={
      name: "Prathamesh",
    };
    setUserName(data.name);
  },[]);

    return (
      <UserContext.Provider value={{loggedIn:userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
      </UserContext.Provider>
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
        path:"/grocery",
        element:<Suspense fallback={"loading..."}>
                  <Grocery/>
                </Suspense>
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