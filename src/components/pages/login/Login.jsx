import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { tokenGenerator } from "../../../auth/auth";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Authcontext, GlobalContext } from "../../../globalcontext/GlobalContextHome";
// import { tokenGenerator } from '../../utils/tokenlibary';

const Login = () => {

    // const {token,loginUser,setLoginUser} = useContext(GlobalContext);
    const { loginStatus,setLoginStatus,current_user,setCurrent_user } = useContext(Authcontext);
    // console.log(loginStatus)


  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [allusers, setAllusers] = useState([]);

  // const userdetails = JSON.parse(localStorage.getItem("Registered Data"));

  const getchUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/teachers");
      setAllusers(data);
    } catch (error) {
      console.log(error.message);
      toast.error("Internal server error, please try again");
    }
  };

  useEffect(() => {
    getchUser();
  }, []);


  const handleInp = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login Details", formdata);
    // if (
    //   formdata.email === userdetails.email &&
    //   formdata.password === userdetails.password
    // ) {
    //   setFormdata({
    //     email: "",
    //     password: "",
    //   });
    //   const token = tokenGenerator(userdetails);
    //    localStorage.setItem("authtoken",JSON.stringify(token));

    //   localStorage.setItem("authkey", token);

    //   localStorage.getItem("authkey");
    //   const tdata = await axios.get("http://localhost:3000/teachers");
    //   console.log(tdata);
    //   navigate("/dashboard");
    // } else {
    //   setFormdata({
    //     email: "",
    //     password: "",
    //   });
    //   alert("Please enter valid email or password");
    // }

    const current_user = allusers.filter((ele) => ele.email === formdata.email);
    // console.log(current_user[0].);

    if (current_user.length === 0) return toast.danger("User not found");

    if (current_user[0].email === formdata.email && current_user[0].password === formdata.password) {
      const token = tokenGenerator(current_user[0]);

      
      // console.log(token)
      localStorage.setItem("authtoken", JSON.stringify(token));
      setFormdata({
        email: "",
        password: "",
      });
      toast.success("Login Successfully!");
      // setLoginUser(current_user[0])

      setLoginStatus(true);
      // setCurrent_user(current_user[0]);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }else{
      toast.warning("Please Enter valid email or password")
    }
  };

  // console.log(formdata);
  // console.log(JSON.parse(localStorage.getItem("Registered Data")))
  return (
    <div className="w-full h-[86vh] bg-[#e0e8f5] flex items-center justify-center  ">
      <div className="w-[35%] h-[75%] bg-white border  shadow-2xl  text-black flex flex-col rounded-3xl items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] h-[95%]  flex flex-col justify-between p-8  "
        >
          <h1 className="text-3xl text-center font-semibold pb-4">
            Welcome Back 👋
          </h1>

          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            className="h-[15%] p-3 rounded-lg"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleInp}
            value={formdata.email}
          />
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            className="h-[15%] p-3 rounded-lg"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleInp}
            value={formdata.password}
          />

          <button className="w-full bg-blue-700  rounded-xl h-[14%] text-white font-semibold gap-6">
            Login
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className=" text-blue-700 font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
