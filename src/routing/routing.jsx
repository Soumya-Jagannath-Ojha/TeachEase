import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/Contact";
import Reference from "../components/pages/resources/Reference";
import Login from "../components/pages/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Profile from "../components/pages/profile/Profile";
import AddStudent from "../components/pages/addstudent/AddStudent";
import AllStudent from "../components/pages/allstudents/AllStudent";
import Setting from "../components/pages/setting/Setting";
import ProtectedRoute from "../privateRouting/ProtectedRoute";
import SignUp from "../components/pages/signup/SignUp";
import EditProfile from "../components/pages/profile/EditProfile";

export const paths = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [ 
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resources",
        element: <Reference />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/dashboard/profile/:current_id",
            element: <Profile />,
          },
          {
            path: "/dashboard/addstudent",
            element: <AddStudent />,
          },
          {
            path: "/dashboard/allstudent",
            element: <AllStudent />,
          },
          {
            path: "/dashboard/setting",
            element: <Setting />,
          },
         
        ],
      },


      {
        path:"/update_profile/:user",
        element:<EditProfile/>
      },
    ],
  },
]);

const routing = () => {
  return <div></div>;
};

export default routing;
