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
                      ? "block w-full h-full xl:h-hero xl:w-hero object-cover"
                      : "hidden"
                  }
                />
                <img className="absolute top-0 left-0 w-full h-full xl:h-hero xl:w-hero" src={filter} />
                <div className="absolute bottom-0 left-0 w-auto xl:w-hero h-auto flex items-end px-8 py-2 mx-auto">
                     <img src={slide.thumb} className="bg-blue-200 w-48 h-60"/>
                     <div className="flex items-center">
                       <img className="h-20 m-3" src={play}/>
                       <div className="flex flex-col  items-start my-2">
                         <span className="text-white font-medium text-3xl text-left mb-1">"Keke Palmer on Two Roles That Changed Her Life"</span>
                         <spav className="text-gray-500 font-medium text-xl">Watch Our Interview From Sundance 2022</spav>
                       </div>
                     </div>
                </div>
              </div>

            );
            
          })}
          <div  onClick={()=>setCurrentSlide(currentSlide-1)} className='absolute left-0 h-16 p-3 border-white border-2 rounded-md inset-y-1/3 text-white cursor-pointer ml-2 '><AiOutlineLeft className="text-4xl" /></div>
          
          <div  onClick={()=>setCurrentSlide(currentSlide+1)} className='absolute right-0 h-16 p-3 border-white border-2 rounded-md inset-y-1/3 text-white cursor-pointer mr-2 '><AiOutlineRight className="text-4xl" /></div>

        </div>
    </div>
    )
}

export default Carousel
