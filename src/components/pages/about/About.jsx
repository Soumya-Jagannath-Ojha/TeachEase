import React from "react";

const About = () => {
  return (
    <div className="w-full h-[86vh] bg-[#e0e8f5] ">
      <div className="h-[50%] w-full  flex flex-col items-center justify-center p-20 gap-4">
        <h1 className="text-3xl font-bold">About <span className="text-amber-400">TeachEase</span></h1>
        <p className="text-center px-24">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut
          nemo at aliquid culpa molestiae dolor iure similique repellendus quae,
          nisi rem ipsa tempore inventore sunt, itaque eos exercitationem omnis!
          Suscipit sequi eius inventore officia cumque autem at rem culpa dolore
          ad, accusamus beatae iste
        </p>
      </div>

      <div className="h-[50%] w-full  flex items-center justify-center gap-28">

        <div className=" h-[80%]  w-[26%] rounded-3xl flex flex-col items-center p-4 border-t-4 border-blue-700 shadow-2xl gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
          <p className="text-sm text-center px-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
            doloremque velit maiores dolor, distinctio sapiente quam non
           
          </p>
        </div>
        
        <div className=" h-[80%]  w-[26%] rounded-3xl flex flex-col items-center p-4 border-t-4 border-blue-700 shadow-2xl gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
          <p className="text-sm text-center  px-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
            doloremque velit maiores dolor, distinctio sapiente quam non
           
          </p>
        </div>
        
        <div className=" h-[80%]  w-[26%] rounded-3xl flex flex-col items-center p-4 border-t-4 border-blue-700 shadow-2xl gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Our Values</h2>
          <p className="text-sm text-center  px-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
            doloremque velit maiores dolor, distinctio sapiente quam non
           
          </p>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default About;
