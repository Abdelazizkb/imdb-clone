import React from 'react';
import Items from './Items';

function More() {
  return  <div className=" container px-4 xl:px-28 mx-auto flex flex-col items-start mt-32 xl:mt-48 ">
                <span className="border-l-8 border-yellow pl-2 text-white text-2xl font-bold">More to watch</span>
                <span className="text-gray-400 text-lg font-medium my-4">IMDb helps you select the perfect next show or movie to watch.</span>
                <div className="flex">
                    <div  className="px-20 py-1 border-2 border-white text-lg text-white font-medium flex items-center justify-center mr-4"><span>Watch guide</span></div>
                    <div  className="px-20 py-1 border-2 border-white text-lg text-white font-medium flex items-center justify-center"><span>Moste popular</span></div>
                </div>
            </div>;
}

export default More;