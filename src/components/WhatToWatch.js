import React from 'react';
import SignIn from './SignIn';

function WhatToWatch() {
  return   <div className=" container lg:px-4 xl:px-28 mx-auto flex flex-col items-start py-2 xl:py-20 ">
                <div className="flex flex-col lg:flex-row w-full justify-between items-start p-4 lg:p-0">
                    <span  className="text-yellow text-lg md:text-4xl font-bold ">
                      What to watch
                    </span>
                    <div className="lg:self-end text-blue-400 text-sm md:text-md lg:text-lg my-2 lg:my-0 font-medium cursor-pointer">Get more recommendations &#62;</div>
                </div>
                <div className="flex flex-col items-start bg-navbar lg:bg-transparent p-4 lg:p-0 w-full">
                  <span className="border-l-4 border-yellow pl-2 text-white text-lg md:text-2xl font-bold lg:my-10">From your watch list &#62;</span>
                  <SignIn/>
                </div>
           </div>;
}

export default WhatToWatch;
