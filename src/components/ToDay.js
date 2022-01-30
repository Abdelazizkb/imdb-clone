import React, { useState,useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Items from './Items';
import Scroll from "./Scroll"
function ToDay() {
  const [show, setShow] = useState(2);
  
  useEffect(() => {

    const screenTest=()=>{
      if (window.matchMedia("(max-width: 426px)").matches) { // If media query matches
        setShow(1)
      } else {
        if (window.matchMedia("(max-width: 769px)").matches) { // If media query matches
          setShow(3)
        }
        else{
          setShow(2)
        }
      }
    }
    screenTest()
    window.addEventListener('resize',screenTest)
  }, []);
  
  return (
    <div className="container md:px-4 xl:px-28 mx-auto mt-4 lg:mt-0 flex flex-col items-start pt-2 md:pt-4 lg:pt-10 xl:pt-24 bg-navbar lg:bg-transparent">
         <span  className="mx-4 md:mx-0 text-yellow text-xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8">
          Featured today
         </span>
         <div className="ml-2 md:ml-0 relative  h-auto w-full lg:w-hero-lg xl:w-hero">
          <Items show={show}/>
         </div>
    </div>
    );
}

export default ToDay;
