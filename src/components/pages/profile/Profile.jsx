import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../globalcontext/GlobalContextHome";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  // const {current_user} = useContext(Authcontext);
  const  {setLoginStatus} = useContext(Authcontext);
  const navigate = useNavigate();

  const [current_user, setCurrent_user] = useState(null);
  const { current_id } = useParams();
  // console.log(current_id);

  const fetchUser = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/teachers/${current_id}`
    );
    // console.log(data);
    setCurrent_user(data);
  };


  const handleDelete = async()=>{
    const {data} = await axios.delete(`http://localhost:3000/teachers/${current_id}`);
    console.log(data)
    localStorage.removeItem("authtoken");
    setLoginStatus(false);
    toast.error("Deleting your account sucessfully ")
    navigate("/");

    // setTimeout(()=>{

    //   navigate("/");
    // },2000)
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="w-[50%] h-[80%] bg-gray-100 rounded-2xl flex flex-col items-center gap-9">
        <div className="h-[30%]   flex flex-col items-center justify-evenly ">
          <div className="bg-blue-700 text-white w-[40%] h-[40%] rounded-full flex items-center justify-center">
            {current_user?.teachername?.slice(0, 1)}
          </div>
          <p>{current_user?.email}</p>
        </div>
        <div className="h-[24%]  flex flex-col gap-2 ">
          <div>Age: {current_user?.age}</div>
          <div>Subject: {current_user?.subject}</div>
        </div>
        <div className=" h-[12%] w-[70%] flex items-center justify-evenly gap-3">
          <Link to={`/update_profile/${current_user?.teachername}`} className="bg-blue-600 text-white w-[50%] h-[80%] flex items-center justify-center rounded-2xl">
            Edit Profile
          </Link>
          <Link onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700  w-[50%] h-[80%] flex items-center justify-center rounded-2xl">
            Delete Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
