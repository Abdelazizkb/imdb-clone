import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function ToDay() {
  return (
    <div className="container px-12 xl:px-28 mx-auto flex flex-col items-start py-24">
         <span  className="text-yellow text-xl font-bold mb-4">
          Featured today
         </span>
         <div className="relative h-64 w-hero bg-gray-400">
             bg
             <div   className='absolute left-0 h-12 p-1 border-white border-2 rounded-md inset-y-1/3 text-white cursor-pointer ml-2 mt-2'><AiOutlineLeft className="text-4xl" /></div>
          
             <div   className='absolute right-0 h-12 p-1 border-white border-2 rounded-md inset-y-1/3 text-white cursor-pointer mr-2 mt-2'><AiOutlineRight className="text-4xl" /></div>

         </div>

    </div>
    );
}

export default ToDay;
