import React from 'react';
import { MdAddBox } from "react-icons/md";

function SignIn() {
  return <div className="w-full py-2 md:py-6 lg:py-0">
             <div className="mx-auto flex flex-col items-center">
                <MdAddBox className="text-gray-600 text-4xl my-2"/>
                <span className="text-white font-bold  text-md lg:text-xl">Sign in to access your Watchlist</span>
                <span  className="text-white font-meduim  text-md lg:text-xl">Save shows and movies to keep track of what you want to watch.</span>
                <span className="px-10 py-2 bg-yellow mt-10 text-sm lg:text-md font-bold rounded-md">Sign in to IMDb</span>
             </div>
         </div>;
}

export default SignIn;
