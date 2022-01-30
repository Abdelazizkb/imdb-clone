import React,{useState,useEffect} from 'react';
import PrimeItems from './PrimeItems';

function Favorites() {
   const [show, setShow] = useState(2);
  
   useEffect(() => {
     if (window.matchMedia("(min-width: 1024px)").matches) { // If media query matches
       setShow(6)
       console.log(show);
     } else {
       if (window.matchMedia("(min-width: 426px)").matches) { // If media query matches
         setShow(4)
         console.log(show);
       }
       else{
         setShow(2)
         console.log(show);
       }
     }
   }, []);

  return  <div className=" container md:px-4 xl:px-28 mx-auto flex flex-col items-start pt-4 h-auto bg-navbar lg:bg-transparent">
                <span className="mx-4 md:mx-0 border-l-4 border-yellow pl-2 text-white text-lg md:text-xl lg:text-2xl font-bold">Fan favorites &#62;</span>
                <span className="px-4 md:px-0 text-gray-400 text-sm md:text-md lg:text-lg font-medium mt-2 ">This week's top TV and movies</span>
                <div className="px-1 md:px-0 relative h-auto w-full mt-3 md:mt-8">
                   <PrimeItems />
                </div>
            </div>;
}

export default Favorites;
