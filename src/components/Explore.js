import React from 'react';
import ExploreItems from './ExploreItems';

function Explore() {
  return    <div className=" container px-4 xl:px-28 mx-auto flex flex-col items-start mt-44 pb-6 xl:pb-10">
                <span className="text-yellow text-4xl font-medium mb-3 xl:mb-6">Explore Movies & TV shows</span>
                <span className="border-l-8 border-yellow pl-2 text-white text-2xl font-bold">Top box office &#62;</span>
                <span className="text-gray-400 text-lg font-medium mt-2">Weekend of January 21-23</span>
                <ExploreItems/>
            </div>;
}

export default Explore;
