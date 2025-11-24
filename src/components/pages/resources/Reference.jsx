import React from 'react'

const Reference = () => {
  return (
     <div className="w-full h-[86vh] bg-[#e0e8f5] ">
      <div className="h-[50%] w-full  flex flex-col items-center justify-center p-20 gap-4">
        <h1 className="text-3xl font-bold">Learning <span className="text-amber-400">Resources</span></h1>
        <p className="text-center px-24">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut
          nemo at aliquid culpa molestiae dolor iure similique
         
        </p>
      </div>

      <div className="h-[50%] w-full  flex items-center justify-center gap-28">

        <div className=" h-[80%]  w-[26%] rounded-3xl flex flex-col items-center p-4  shadow-2xl gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Khan Academy</h2>
          <p className="text-sm text-center px-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
            doloremque velit maiores dolor, distinctio sapiente quam non
           
          </p>
        </div>
        
        <div className=" h-[80%]  w-[26%] rounded-3xl flex flex-col items-center p-4  shadow-2xl gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Cources</h2>
          <p className="text-sm text-center  px-4  leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
            doloremque velit maiores dolor, distinctio sapiente quam non
           
          </p>
        </div>
        
        <div className=" h-[80%]  w-[26%] rounded-3xl flex flex-col items-center p-4  shadow-2xl gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Edx</h2>
          <p className="text-sm text-center  px-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
            doloremque velit maiores dolor, distinctio sapiente quam non
           
          </p>
        </div>
        
        
        
      </div>
    </div>
  
  )
}

export default Reference