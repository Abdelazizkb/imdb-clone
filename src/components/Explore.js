import React from 'react';
import ExploreItems from './ExploreItems';

function Explore() {
  return    <div className=" container lg:px-4 xl:px-28 mx-auto flex flex-col items-start mt-4 pb-2 lg:pb-6 xl:pb-10">
                <span className="px-4 lg:px-0 text-yellow text-lg md:text-3xl lg:text-4xl font-bold mb-6">Explore Movies & TV shows</span>
                <div className="flex flex-col items-start bg-navbar lg:bg-transparent p-4 pb-0 lg:p-0 w-full">
                  <span className="border-l-8 border-yellow pl-2 text-white text-md md:text-xl lg:text-2xl font-bold">Top box office &#62;</span>
                  <span className="text-gray-400 text-sm md:text-md lg:text-lg font-medium mt-2">Weekend of January 21-23</span>
                  <ExploreItems/>
                </div>  
            </div>;
}

export default Explore;
