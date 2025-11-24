import React, { useContext, useEffect, useState } from "react";
import Navlist from "./Navlist";
import { Link } from "react-router-dom";
import { Authcontext } from "../../globalcontext/GlobalContextHome";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  // const { token, loginUser, setLoginUser } = useContext(GlobalContext);
  const { loginStatus, current_user, setCurrent_user } =
    useContext(Authcontext);

  // const [login_user,setLogin_user] = useState(null);


  // useEffect(()=>{
  //   setLogin_user(current_user)
  // },[])

  // console.log(login_user)
  // console.log("curr_user",current_user)

  // const {current_user,setCurrent_user} = useContext(Authcontext);
  // console.log(current_user)
  //   console.log(token)
  // console.log(loginStatus);
  // console.log(setLoginUser);

  return (
    <nav className="h-[78px] w-full bg-[#f5f7fa] shadow-2xl flex ">
      <div className="w-[20%]  flex items-center gap-2 ps-4">
        <img
          className="h-[60%] w-[20%] object-cover "
          src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
          alt=""
        />
        <Link to="/" className="text-xl font-bold text-indigo-800">
          TeachEase
        </Link>
      </div>

      <div className="w-[80%] h-full   flex items-center  justify-end">
        <div className="h-full   w-[70%] flex  items-center">
          <ul className="flex w-[80%] items-center justify-end gap-16 capitalize font-semibold ">
            <li className="hover:text-amber-500">
              <Link to="/">Home</Link>
            </li>
            <Navlist />
          </ul>
          <div className="w-[20%] h-full flex   items-center justify-center">
            {loginStatus ? (
              // <div className="font-semibold bg-gray-300 w-[30%] h-[50%] rounded-full flex items-center justify-center">{loginUser.teachername.slice(0,1)}</div>
              <Link to="/dashboard" className="font-semibold bg-blue-700 text-white w-[35%] h-[60%] rounded-full flex items-center justify-center">
                {current_user?.teachername?.slice(0, 1)}
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-[60%] flex items-center justify-center  h-[60%] text-center bg-blue-700 rounded-2xl text-white font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
