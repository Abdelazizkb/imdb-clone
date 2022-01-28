import React from 'react';
import Items from './Items';

function Exclusive() {
  return    <div className=" container px-4 xl:px-28 mx-auto flex flex-col items-start mt-12  xl:pb-20">
                <span className="text-yellow text-4xl font-medium mb-6">Exclusive videos</span>
                <span className="border-l-8 border-yellow pl-2 text-white text-2xl font-bold">IMDb Originals</span>
                <span className="text-gray-400 text-lg font-medium mt-2">Celebrity interviews, trending entertainment stories, and expert analysis</span>
                <div className="relative h-64 w-full mt-8">
                   <Items show={3}/>
                </div>
            </div>;
}

export default Exclusive;