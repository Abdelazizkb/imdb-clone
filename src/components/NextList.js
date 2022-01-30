import React from 'react';
import play from "../images/play.svg";
import { upnext } from "../bd";

function NextList() {
  return (
        <div className="hidden xl:flex flex-col  items-start">
            <span className="text-yellow text-xl font-bold mb-4">Up next</span>
            { upnext.map((slide,key)=>{ 
                return (
                <div className="flex p-1 mt-3 items-end" key={key}>
                    <img className="w-28 h-32" src={slide.image}/>
                    <div className="ml-2 flex flex-col items-start">
                        <img className="h-10" src={play}/>
                        <span className="text-white text-left text-md font-medium my-1">"{slide.title}"</span>
                        <span className="text-gray-400 text-sm font-medium text-left">Watch the New Marvel Series Trailer</span>
                    </div>
                 </div>
                )
            })}

            <span className="text-white text-2xl font-bold mt-8 cursor-pointer">Browse trailers &#62;</span>
        </div>
    );
}

export default NextList;
