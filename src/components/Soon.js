import React, { useState,useEffect } from 'react';
import Items from './Items';

function Soon() {
   const [show, setShow] = useState(3);
  
   useEffect(() => {
    const screenTest=()=>{
      if (window.matchMedia("(max-width: 426px)").matches) { // If media query matches
        setShow(1)
      } 
      else {
        setShow(3)
     }
    }
    screenTest()
    window.addEventListener('resize',screenTest)

   }, []);
  return    <div className="container py-4 md:p-4 pb-0 lg:py-0 xl:px-28 mx-auto flex flex-col items-start  xl:pb-20 bg-navbar lg:bg-transparent">
                <span className="mx-4 md:mx-0 border-l-4 border-yellow pl-2 text-white text-lg md:text-xl lg:text-2xl font-bold">Coming soon to theaters (US) &#62;</span>
                <span className="mx-4 md:mx-0 text-gray-400 text-sm md:text-md lg:text-lg font-medium mt-2">Trailers for upcomming realase</span>
                <div className="px-1 md:px-0 relative h-64 w-full mt-4 lg:mt-8">
                   <Items show={show}/>
                </div>
            </div>;
}

export default Soon;
