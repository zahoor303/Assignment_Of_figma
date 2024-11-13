 import React from "react";
const Hero = () => {
    return (
      <div className="min-h-screen bg-[#043873] flex flex-col items-center justify-center px-8 md:px-[220px] py-16 text-white">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-24 max-w-[1200px] w-full">
          
          {/* Text Container */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            {/* Heading with Line Break */}
            <h2 className="font-bold text-xl md:text-[64px] letterspacing-[-2] md:leading-[77.45px]  mb-2">
              Get More Done with<br/>whitepace
            </h2>
            
            {/* Paragraph with Line Break */}
            <p className="text-base md:text-lg leading-6 md:leading-[30px]  mb-8">
              Project management software that enables your teams to collaborate, <br />
              plan, analyze, and manage everyday tasks.
            </p>
            
            {/* Button */}
            <button className="px-6 py-3 bg-[#4A90E2] text-white rounded-lg font-medium text-sm md:text-base shadow-md hover:bg-[#357ABD] transition duration-300">
              Try Whitespace free →
            </button>
          </div>
  
          {/* Rotated Box */}
          <div className="relative flex items-center justify-center w-full md:w-[400px] h-[300px] md:h-[400px] bg-[#C4DEFD]  shadow-md transform rotate-0 md:rotate-90"></div>
  
        </div>
      </div>
    );
  };
  
  export default Hero;
  

