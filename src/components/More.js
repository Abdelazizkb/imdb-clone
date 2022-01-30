import React from 'react';
import Items from './Items';

function More() {
  return    <div className=" container px-4 pt-10 pb-4 lg:py-0 xl:px-28 mx-auto flex flex-col items-start lg:mt-12  bg-navbar lg:bg-transparent">
                <span className="border-l-4 border-yellow pl-2 text-white text-lg md:text-2xl font-bold">More to watch</span>
                <span className="text-gray-400 text-md md:text-lg text-left font-medium my-4">IMDb helps you select the perfect next show or movie to watch.</span>
                <div className="flex">
                    <div  className="px-2 md:px-6 md:px-20 py-1 border-2 border-white text-sm md:text-md lg:text-lg text-white font-medium flex items-center justify-center mr-4 rounded-sm"><span>Watch guide</span></div>
                    <div  className="px-2 md:px-6 md:px-20 py-1 border-2 border-white text-sm md:text-md lg:text-lg text-white font-medium flex items-center justify-center rounded-sm"><span>Moste popular</span></div>
                </div>
            </div>;
}

export default More;