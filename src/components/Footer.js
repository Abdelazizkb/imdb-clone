import React from 'react';
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitch from "../images/twitch.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import amazone from "../images/amazone.svg";

function Footer() {
  return <div className="container px-4 xl:px-28 mx-auto mt-8 xl:mt-12 flex flex-col items-center">
             <div className="w-2/5 xl:w-1/5 px-10 xl:px-0 mx-auto text-white text-xl font-medium flex justify-between  py-8 xl:py-12 cursor-pointer">
                 <a><img src={facebook} /></a>
                 <a><img src={instagram} /></a>
                 <a><img src={twitch} /></a>
                 <a><img src={twitter} /></a>
                 <a><img src={youtube} /></a>
             </div>
              <div className="w-5/6 xl:w-4/6 mx-auto text-white text-xl font-medium flex justify-between px-4">
                 <a>Get the IMDb App</a>
                 <a>Help</a>
                 <a>Site Index</a>
                 <a>IMDbPro</a>
                 <a>Box Office Mojo</a>
                 <a>IMDb Developer</a>
             </div>
             <div className="w-5/6 xl:w-4/6 mx-auto text-white text-xl font-medium flex justify-between my-4">
                 <a>Press Room</a>
                 <a>Advertising</a>
                 <a>Jobs Conditions</a>
                 <a>UsePrivacy</a>
                 <a>PolicyInterest-Based Ads</a>
             </div>
             <span className="my-6"><a><img src={amazone} /></a></span>

             <span className="text-gray-400 text-md mb-4">© 1990-2022 by IMDb.com, Inc.</span>
         </div>;
}

export default Footer;

     