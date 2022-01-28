import React from 'react';
import SignIn from './SignIn';

function WhatToWatch() {
  return   <div className=" container px-4 xl:px-28 mx-auto flex flex-col items-start py-2 xl:py-20">
                <div className="flex w-full justify-between items-start">
                    <span  className="text-yellow text-4xl font-medium ">
                      What to watch
                    </span>
                    <div className="self-end text-blue-400 text-lg font-medium cursor-pointer">Get more recommendations &#62;</div>
                </div>
                <span className="border-l-8 border-yellow pl-2 text-white text-2xl font-bold my-10">From your watch list &#62;</span>
                <SignIn/>
           </div>;
}

export default WhatToWatch;
