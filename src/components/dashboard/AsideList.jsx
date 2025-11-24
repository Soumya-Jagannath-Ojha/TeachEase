import React, { useEffect, useState } from "react";
import DashboardListIterator from "../../utils/DashboardListIterator";
import { Link, useParams } from "react-router-dom";

const AsideList = () => {
  const ds_list = ["addstudent", "allstudent", "setting"];
  // const {current_id} = useParams();
  // const data = useParams();
  // console.log(data)
  // console.log(current_id)
  // const [id, setId] = useState(null);

  const token = JSON.parse(localStorage.getItem("authtoken"));
  // console.log(token)

  const [, id] = token?.split(".");

  // const fetchCurrent_user = () => {

  //   setId(id);
  // };

  // useEffect(() => {
  //   fetchCurrent_user();
  // }, []);

  return (
    <ul className="flex flex-col gap-2 capitalize h-[70%] ">
      <Link
        to={`/dashboard/profile/${id}`}
        className="hover:bg-amber-300 hover:text-black text-lg font-semibold   rounded-lg p-2 text-white"
      >
        Profile
      </Link>
      <DashboardListIterator list={ds_list} />
    </ul>
  );
};

export default AsideList;
