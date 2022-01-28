import React from 'react';
import PrimeItems from './PrimeItems';

function Favorites() {
  return  <div className=" container px-4 xl:px-28 mx-auto flex flex-col items-start pb-20">
                <span className="border-l-8 border-yellow pl-2 text-white text-2xl font-bold">Fan favorites &#62;</span>
                <span className="text-gray-400 text-lg font-medium mt-2 ">This week's top TV and movies</span>
                <div className="relative h-64 w-full mt-8">
                   <PrimeItems/>
                </div>
            </div>;
}

export default Favorites;
