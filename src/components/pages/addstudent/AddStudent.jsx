import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddStudent = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [formdata, setFormdata] = useState({
    studentname: "",
    email: "",
    age: "",
    subject: "",
  });

  const handleInp = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login Details", formdata);

    if (
      (formdata.studentname === "" || formdata.age === "",
      formdata.email === "" ||
       
        formdata.subject === "")
    ) {
      setError(true);
      return;
    }
    setFormdata({
      studentname: "",
      email: "",
      age: "",
      subject: "",
    });
    //! Storeing the data inside local storage
    // localStorage.setItem("Registered Data",JSON.stringify(formdata));

    //! Strong data inside a dummy server

    try {
      const result = await axios.post(
        "http://localhost:3000/students",
        formdata
      );
      // console.log(result)
      setError(false);
      toast.success("Add Student Successfully!");
      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);

      
    } catch (error) {
      console.log(error.message);
      toast.error("Server is not working, please try again");
    }
  }; 



  return (
    <div className="w-full h-full py-2  bg-[#e0e8f5] flex items-center justify-center">
      <div className="w-[45%] h-auto p-4 bg-white text-black flex flex-col rounded-3xl items-center justify-center shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] h-[100%]  flex flex-col justify-between p-2  gap-2"
        >
          <h1 className="text-3xl text-center font-semibold pb-4">
            Add Student
          </h1>

          <label htmlFor="teachername" className="font-semibold">
            Studentname
          </label>
          <input
            type="text"
            className="h-[10%] p-3 rounded-lg"
            name="studentname"
            id="studentname"
            placeholder="Enter studentname"
            onChange={handleInp}
            value={formdata.studentname}
          />

          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            className="h-[10%] p-3 rounded-lg"
            name="email"
            id="email"
            placeholder="Enter student email"
            onChange={handleInp}
            value={formdata.email}
          />

          <label htmlFor="age" className="font-semibold">
            Age
          </label>
          <input
            type="number"
            className="h-[10%] p-3 rounded-lg"
            name="age"
            id="age"
            placeholder="Enter student age"
            onChange={handleInp}
            value={formdata.age}
          />
          <label htmlFor="subject" className="font-semibold">
            Subject
          </label>
          <input
            // type="search"
            list="subjects"
            className="h-[10%] p-3 rounded-lg"
            name="subject"
            id="subject"
            placeholder="Enter student subject"
            onChange={handleInp}
            value={formdata.subject}
          />

          <datalist id="subjects">
            <option value="React" />
            <option value="MERN" />
            <option value="JAVA" />
            <option value="Python" />
            <option value="Testing" />
          </datalist>
          {error ? (
            <p className="text-red-600 text-center">
              {" "}
              Please fill all the fields
            </p>
          ) : (
            ""
          )}

          <button className="w-full bg-amber-600  rounded-xl h-10 text-white font-semibold gap-6">
            Add Student
          </button>

          {/* <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-700 font-semibold">
              Login
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  )
}

export default AddStudent