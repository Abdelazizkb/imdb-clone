import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Items from './Items';
import Scroll from "./Scroll"
function ToDay() {
  return (
    <div className="container px-4 xl:px-28 mx-auto flex flex-col items-start pt-10 xl:pt-24">
         <span  className="text-yellow text-4xl font-medium mb-8">
          Featured today
         </span>
         <div className="relative h-64 w-hero-lg xl:w-hero">
          <Items/>
         </div>
    </div>
    );
}

export default ToDay;
