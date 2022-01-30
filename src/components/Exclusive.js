import React from 'react';
import Items from './Items';

function Exclusive() {
  return    <div className=" container lg:px-4 xl:px-28 mx-auto flex flex-col items-start mt-4 lg:mt-12  xl:pb-20">
                <span className="px-4 lg:px-0 text-yellow text-lg md:text-3xl lg:text-4xl font-bold mb-6">Exclusive videos</span>
                <div className="flex flex-col items-start bg-navbar lg:bg-transparent p-4 lg:p-0 w-full">
                     <span className="border-l-4 border-yellow pl-2 text-white text-md md:text-xl lg:text-2xl font-bold">IMDb Originals</span>
                     <span className="text-gray-400 text-sm md:text-md lg:text-lg text-left font-medium mt-2 ">Celebrity interviews, trending entertainment stories, and expert analysis</span>
                     <div className="relative h-64 w-full mt-3 lg:mt-8">
                        <Items show={3}/>
                     </div>
                </div>

            </div>;
}

export default Exclusive;