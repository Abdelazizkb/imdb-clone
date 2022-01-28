import React,{useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselData } from "../bd";
import Swipe from "react-easy-swipe";
import filter from "../images/filter-hero.png";
import play from "../images/play.svg";
import PrimeItem from './PrimeItem';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function PrimeItems() {
    const [currentSlide, setCurrentSlide] = useState(0)

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>

    };
    return (
      <Slider {...settings}>
       {CarouselData.map((slide, index) => {
            return (
               <PrimeItem slide={slide} index={index}/>

            );
            
          })}
      </Slider>
    );
  }

  const PrevArrow =(props)=>{
    const {onClick } = props;
      return(
        <div onClick={onClick} className='absolute -left-8 h-16 p-3 px-1 border-white border-2 rounded-md inset-y-1/3 text-white cursor-pointer mr-2 z-50'><AiOutlineLeft className="text-4xl" /></div>
      )
  }
  const NextArrow =(props)=>{
    const {onClick } = props;
      return(
        <div onClick={onClick} className='absolute -right-5 h-16 p-3 px-1 border-white border-2 rounded-md inset-y-1/3 text-white cursor-pointer mr-2 '><AiOutlineRight className="text-4xl" /></div>    )
}