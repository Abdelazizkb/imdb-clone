import React,{useState,useEffect} from 'react';
import PrimeItems from './PrimeItems';

function Prime() {

  return  <div className=" container lg:px-4 xl:px-28 mx-auto flex flex-col items-start mt-4 lg:mt-12  xl:pb-20">
               <span className="px-4 lg:px-0 text-yellow text-lg md:text-3xl lg:text-4xl font-medium mb-6">Explore what’s streaming</span>
               <div className="flex flex-col items-start bg-navbar lg:bg-transparent md:p-4 lg:p-0 w-full">
                  <span className="mx-4 md:mx-0 border-b-4 border-yellow px-6 pb-2 text-white text-sm md:text-md font-bold">PRIME VIDEO</span>
                  <span className="mx-4 md:mx-0  text-white text-md md:text-lg  mt-2 md:mt-4 ">included with Prime</span>
                  <div className="px-1 md:px-0  relative h-auto w-full mt-3 md:mt-8">
                     <PrimeItems/>
                  </div>
               </div>  
         </div>;
}

export default Prime;