import React, { useContext, useEffect, useState } from "react";
import AsideList from "./AsideList";
import { Link, Outlet } from "react-router-dom";
import { Authcontext } from "../../globalcontext/GlobalContextHome";
import axios from "axios";

const Dashboard = () => {
  const { current_user, setCurrent_user, loginStatus, setLoginStatus } =
    useContext(Authcontext);
  // console.log(current_user)

  const fetchCurrent_user = async () => {
    const token = JSON.parse(localStorage.getItem("authtoken"));
    // console.log(token)

    const [, id] = token.split(".");
    // console.log(id)

    const { data } = await axios.get(`http://localhost:3000/teachers/${id}`);

    // console.log(data);
    setCurrent_user(data);
  };

  const handleClick = () => {
    localStorage.removeItem("authtoken");
    setLoginStatus(false);
  };

  useEffect(() => {
    fetchCurrent_user();
  }, []);

  return (
    <div className="w-full h-[86vh] bg-[#e0e8f5] flex p-2 gap-3">
      <aside className="w-[20%] bg-blue-700 h-full p-1 rounded-xl shadow-3xl">
        <div className="h-[18%] p-4  w-full">
          <h1 className="text-2xl text-amber-400 font-bold">TeachEase</h1>
          <p className="text-xs text-white">TeachEase Dashboard</p>
        </div>
        <div className="h-[70%]  w-full p-4 gap-4">
          <AsideList />
        </div>
        <Link
          to="/"
          onClick={handleClick}
          className="h-[10%] bg-amber-500 text-white w-full rounded-xl flex items-center justify-center"
        >
          Logout
        </Link>
      </aside>

      <div className="bg-white  w-[80%] rounded-2xl shadow-2xl flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
