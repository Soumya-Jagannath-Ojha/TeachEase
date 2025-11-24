import React, { createContext, useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

const Root = () => {
  // const data1 = useContext(GlobalContext);
  // console.log(data1)
  // const [loginUser, setLoginUser] = useState({});
  const token = localStorage.getItem("authtoken");
  // console.log(token);

  return (
    <div className="bg-[#f5f7fa] w-screen h-auto">
      <Navbar />
      <Outlet />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false} 
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
