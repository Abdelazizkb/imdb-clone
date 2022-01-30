import React from 'react';
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitch from "../images/twitch.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import amazone from "../images/amazone.svg";

function Footer() {
  return <div className="container px-4 xl:px-28 mx-auto lg:mt-8 xl:mt-12 flex flex-col items-center">
             <div className="w-4/5 md:w-2/5 xl:w-1/5 px-10 xl:px-0 mx-auto text-white text-xl font-medium flex justify-between  py-8 xl:py-12 cursor-pointer">
                 <a><img src={facebook} /></a>
                 <a><img src={instagram} /></a>
                 <a><img src={twitch} /></a>
                 <a><img src={twitter} /></a>
                 <a><img src={youtube} /></a>
             </div>
              <div className="w-5/6 xl:w-4/6 mx-auto text-white text-sm md:text-xl font-medium flex flex-wrap justify-between md:px-1 md:px-4">
                 <a className="m-1 md:m-0">Get the IMDb App</a>
                 <a className="m-1 ml-3  md:m-0">Help</a>
                 <a className="m-1 md:m-0">Site Index</a>
                 <a className="m-1 md:m-0">IMDbPro</a>
                 <a className="m-1 md:m-0">Box Office Mojo</a>
                 <a className="m-1 md:m-0">IMDb Developer</a>
             </div>
             <div className="w-5/6 xl:w-4/6 mx-auto text-white text-sm md:text-xl font-medium flex flex-wrap justify-between md:my-4">
                 <a className="m-1 md:m-0">Press Room</a>
                 <a className="m-1 md:m-0">Advertising</a>
                 <a className="m-1 md:m-0">Jobs Conditions</a>
                 <a className="m-1 md:m-0">UsePrivacy</a>
                 <a className="m-1 md:m-0">PolicyInterest-Based Ads</a>
             </div>
             <span className="my-6"><a><img src={amazone} /></a></span>

             <span className="text-gray-400 text-sm md:text-md mb-4">© 1990-2022 by IMDb.com, Inc.</span>
         </div>;
}

export default Footer;

     