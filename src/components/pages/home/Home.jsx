import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => { 
  return (
    <div className='w-full h-[86vh] bg-[#e0e8f5] flex'>

        <div className='w-[50%] h-full  flex flex-col gap-6 justify-center p-7'>
            <h1 className='text-4xl font-bold text-indigo-800'>Welcome to <span className='text-amber-400'>TeachEase</span></h1>
            <p >Empowring learners through knowledge, curiosity and innovation. Explore, Learn, and Grow with our digital learning platform.</p>
           <div className=' w-[28%]  h-[18%] flex items-center' >
             <Link to="/login" className='bg-blue-700 text-white font-semibold p-3 h-[60%] text-center  w-[88%]  rounded-3xl'>Get Started</Link>
           </div>
        </div>

        <div className='w-[50%] h-full '>
            <img className='p-8 ' src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="" />

        </div>
    </div>
  )
}

export default Home