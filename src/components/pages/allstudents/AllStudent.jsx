import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const AllStudent = () => {

  const [allstudents, setAllstudents] = useState([]);

  const fetchStudent = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/students");
      console.log(data);
      setAllstudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <div className="w-full h-full   bg-[#e0e8f5] flex items-center justify-center rounded-lg">
      <table className="w-[60%] h-[40%] p-2 bg-gray-800 text-white text-center rounded-lg">
        <thead className=" ">
          <tr className="border-b border-gray-900">
            <th className="p-2">Name</th>
            <th className="p-2  ">Email</th>
            <th className="p-2">Age</th>
            <th className="p-2  ">Subject</th>
          </tr>
        </thead>
        <tbody className="">
          {allstudents.map((ele, idx) => {
            return (
              <tr className="border-b border-gray-900">
                <td className="p-2 capitalize">{ele.studentname}</td>
                <td className="p-2">{ele.email}</td>
                <td className="p-2 ">{ele.age}</td>
                <td className="p-2 ">{ele.subject}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudent;
