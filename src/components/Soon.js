import React from 'react';
import Items from './Items';

function Soon() {
  return    <div className="container px-4 xl:px-28 mx-auto flex flex-col items-start  xl:pb-20">
                <span className="border-l-8 border-yellow pl-2 text-white text-2xl font-bold">Coming soon to theaters (US) &#62;</span>
                <span className="text-gray-400 text-lg font-medium mt-2">Trailers for upcomming realase</span>
                <div className="relative h-64 w-full mt-8">
                   <Items show={3}/>
                </div>
            </div>;
}

export default Soon;
