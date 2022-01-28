import React from 'react';
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import start from "../images/start.svg"

function PrimeItem({slide}) {
  return    <div className="relative flex flex-col h-prime-lg w-prime-lg xl:h-prime xl:w-prime items-start bg-stell rounded-sm">
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  
                  className="block h-64 w-full object-cover rounded-t-sm"
                />
                <div className="flex flex-col items-start p-3 w-full">
                  <span className="flex items-center text-white font-bold text-lg"><AiFillStar className="text-yellow mr-2 text-lg"/> 8.4 <AiOutlineStar className="text-blue-400 ml-6 text-lg"> </AiOutlineStar></span>
                  <spav className="text-white font-medium text-lg mt-2">Watch Our</spav>
                  <spav className="w-full py-2 text-center text-blue-400 font-medium text-lg mt-8 bg-stone-700 rounded-md ">+ Watchlist</spav>
                  <spav className="w-full py-2 text-center text-white font-bold text-lg mt-2  rounded-md flex justify-center"><img className="mr-1" src={start}/> Trailer</spav>
                </div>

            </div>
}

export default PrimeItem;
