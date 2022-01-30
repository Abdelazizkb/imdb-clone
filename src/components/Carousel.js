import React,{useState} from 'react'
import { CarouselData } from "../bd";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import filter from "../images/filter-hero.png";
import play from "../images/play.svg";

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
    <div className="xl:mr-8">
        <div className="  flex overflow-hidden relative">
          {CarouselData.map((slide, index) => {
            return (
              <div className="relative">
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index ===currentSlide
                      ? "block w-full h-72 md:h-full xl:h-hero xl:w-hero object-cover"
                      : "hidden"
                  }
                />
                <img className="absolute top-0 left-0  w-full h-full xl:h-hero xl:w-hero" src={filter} />
                <div className="absolute bottom-0 left-0 w-auto xl:w-hero h-auto flex items-end px-2 md:px-8 py-2 mx-auto">
                     <img src={slide.thumb} className="bg-blue-200 w-44 h-36 md:w-48 md:h-60"/>
                     <div className="flex flex-col md:flex-row items-start md:items-center ml-2">
                       <img className="h-8 md:h-20 md:m-3" src={play}/>
                       <div className="flex flex-col  items-start my-2">
                         <span className="text-white font-medium text-sm md:text-3xl text-left ">"Keke Palmer on Two Roles That Changed Her Life"</span>
                         <span className="text-gray-500 md:font-medium text-sm md:text-xl text-left">Watch Our Interview From Sundance 2022</span>
                       </div>
                     </div>
                </div>
              </div>

            );
            
          })}
          <div  onClick={()=>setCurrentSlide(currentSlide-1)} className='absolute left-0 md:h-16 md:p-3 border-white md:border-2 rounded-md inset-y-1/3 text-white cursor-pointer ml-2 '><AiOutlineLeft className="text-4xl" /></div>
          
          <div  onClick={()=>setCurrentSlide(currentSlide+1)} className='absolute right-0 md:h-16 md:p-3 border-white md:border-2 rounded-md inset-y-1/3 text-white cursor-pointer mr-2 '><AiOutlineRight className="text-4xl" /></div>

        </div>
    </div>
    )
}

export default Carousel
