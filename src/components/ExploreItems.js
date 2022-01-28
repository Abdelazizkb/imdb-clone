import React from 'react';
import { MdAddBox } from "react-icons/md";

function ExploreItems() {
  return        <div className="relative h-64 w-full mt-8 flex flex-wrap justify-between">
                     <div className="flex h-14 w-explore-lg xl:w-explore items-center hover:bg-stell p-1 rounded-md">
                           <span className="text-white text-xl font-bold py-2 pr-2 border-r-2 border-yellow">1</span>
                           <div className="flex items-center">
                              <MdAddBox className="text-3xl text-white ml-2"/>
                              <div className="flex flex-col items-start ml-2 ">
                                   <span className="text-white text-xl font-medium">Spider-Man: No Way Home</span> 
                                   <span className="text-gray-400 text-xl ">$ 14M</span> 
                              </div> 
                           </div>
                     </div>
                     <div className="flex h-14 w-explore-lg xl:w-explore items-center hover:bg-stell p-1 rounded-md">
                           <span className="text-white text-xl font-bold py-2 pr-2 border-r-2 border-yellow">2</span>
                           <div className="flex items-center">
                              <MdAddBox className="text-3xl text-white ml-2"/>
                              <div className="flex flex-col items-start ml-2 ">
                                   <span className="text-white text-xl font-medium">Scream</span> 
                                   <span className="text-gray-400 text-xl ">$ 12M</span> 
                              </div> 
                           </div>
                     </div>
                     <div className="flex h-14 w-explore-lg xl:w-explore items-center hover:bg-stell p-1 rounded-md">
                           <span className="text-white text-xl font-bold py-2 pr-2 border-r-2 border-yellow">3</span>
                           <div className="flex items-center">
                              <MdAddBox className="text-3xl text-white ml-2"/>
                              <div className="flex flex-col items-start ml-2 ">
                                   <span className="text-white text-xl font-medium">Sing</span> 
                                   <span className="text-gray-400 text-xl ">$ 5.8M</span> 
                              </div> 
                           </div>
                     </div>
                     <div className="flex h-14 w-explore-lg xl:w-explore items-center hover:bg-stell p-1 rounded-md">
                           <span className="text-white text-xl font-bold py-2 pr-2 border-r-2 border-yellow">4</span>
                           <div className="flex items-center">
                              <MdAddBox className="text-3xl text-white ml-2"/>
                              <div className="flex flex-col items-start ml-2 ">
                                   <span className="text-white text-xl font-medium">Reedming Love</span> 
                                   <span className="text-gray-400 text-xl ">$ 3.5M</span> 
                              </div> 
                           </div>
                     </div>
                     <div className="flex h-14 w-explore-lg xl:w-explore items-center hover:bg-stell p-1 rounded-md">
                           <span className="text-white text-xl font-bold py-2 pr-2 border-r-2 border-yellow">5</span>
                           <div className="flex items-center">
                              <MdAddBox className="text-3xl text-white ml-2"/>
                              <div className="flex flex-col items-start ml-2 ">
                                   <span className="text-white text-xl font-medium">The kings Man</span> 
                                   <span className="text-gray-400 text-xl ">$ 1.8M</span> 
                              </div> 
                           </div>
                     </div>
                     <div className="flex h-14 w-explore-lg xl:w-explore items-center hover:bg-stell p-1 rounded-md">
                           <span className="text-white text-xl font-bold py-2 pr-2 border-r-2 border-yellow">6</span>
                           <div className="flex items-center">
                              <MdAddBox className="text-3xl text-white ml-2"/>
                              <div className="flex flex-col items-start ml-2 ">
                                   <span className="text-white text-xl font-medium">The 355</span> 
                                   <span className="text-gray-400 text-xl ">$ 1.6M</span> 
                              </div> 
                           </div>
                     </div>
                     
                </div>
}

export default ExploreItems;
