import React from 'react';
import PrimeItems from './PrimeItems';

function Prime() {
  return  <div className=" container px-4 xl:px-28 mx-auto flex flex-col items-start mt-4 pb-4 xl:pb-20">
                <span className="text-yellow text-4xl font-medium mb-6">Explore what’s streaming</span>
                <span className="border-b-4 border-yellow px-6 py-2 text-white text-md font-bold">PRIME VIDEO</span>
                <span className="text-white text-lg  mt-4 ">included with Prime</span>
                <div className="relative h-64 w-full mt-8">
                   <PrimeItems/>
                </div>
            </div>;
}

export default Prime;