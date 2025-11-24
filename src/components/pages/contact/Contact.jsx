import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-[86vh] bg-[#e0e8f5] ">

      <div className='h-[18%] w-full flex flex-col items-center justify-center gap-4'>
       <h1 className="text-3xl font-bold">Get <span className="text-amber-400">in Touch</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla, sapiente eveniet iste</p>
      </div>

      <div className='w-full h-[82%] flex items-center justify-center'>
        <form action="" className='bg-white text-black w-[40%] h-[95%] rounded-xl flex flex-col gap-1 p-8'>
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" placeholder='Enter your name' className='border h-[13%] p-3 rounded-lg'/>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" placeholder='Enter your email' className='border  h-[13%] p-3 rounded-lg'/>
          <label htmlFor="">Message</label>
          <textarea name="" id=""  className='h-[40%] border  p-3 rounded-lg'></textarea>

         <div className='bg-blue-700 mx-auto  w-[30%] h-[16%] rounded-2xl text-white flex items-center justify-center'>
           <button >Send Message</button>
         </div>

        </form>

      </div>
    </div>
  )
}

export default Contact