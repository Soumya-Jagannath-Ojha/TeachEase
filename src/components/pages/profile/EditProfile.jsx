import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Authcontext } from '../../../globalcontext/GlobalContextHome';

const EditProfile = () => {
 const navigate = useNavigate();
  const [error, setError] = useState(false);


  const {current_user} = useContext(Authcontext);
  // console.log(current_user)
  




  useEffect(()=>{
    setFormdata(current_user)
  },[])


  const [formdata, setFormdata] = useState({
    teachername: "",
    email: "",
    password: "",
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
      (formdata.teachername === "" || formdata.age === "",
      formdata.email === "" ||
        formdata.password === "" ||
        formdata.subject === "")
    ) {
      setError(true);
      return;
    }
    setFormdata({
      teachername: "",
      email: "",
      password: "",
      age: "",
      subject: "",
    });

    //! Update data inside a dummy server

    try {
 
      const rs = await axios.put(`http://localhost:3000/teachers/${current_user?.id}`,formdata)
      // console.log(result)
      setError(false);
      toast.success("Updated Successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

      
    } catch (error) {
      console.log(error.message);
      toast.error("Server is not working, please try again");
    }
  };

  return (
    <div className="w-full h-auto py-2  bg-[#e0e8f5] flex items-center justify-center">
      <div className="w-[35%] h-auto bg-white text-black flex flex-col rounded-3xl items-center justify-center shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] h-[95%]  flex flex-col justify-between p-2  "
        >
          <h1 className="text-3xl text-center font-semibold pb-4">
            Create an Account
          </h1>

          <label htmlFor="teachername" className="font-semibold">
            Teachername
          </label>
          <input
            type="text"
            className="h-[10%] p-3 rounded-lg"
            name="teachername"
            id="teachername"
            placeholder="Enter teachername"
            onChange={handleInp}
            value={formdata?.teachername}
          />

          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            className="h-[10%] p-3 rounded-lg"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleInp}
            value={formdata?.email}
          />
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            className="h-[10%] p-3 rounded-lg"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleInp}
            value={formdata?.password}
          />

          <label htmlFor="age" className="font-semibold">
            Age
          </label>
          <input
            type="number"
            className="h-[10%] p-3 rounded-lg"
            name="age"
            id="age"
            placeholder="Enter your age"
            onChange={handleInp}
            value={formdata?.age}
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
            placeholder="Enter your subject"
            onChange={handleInp}
            value={formdata?.subject}
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
            Update
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-700 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default EditProfile