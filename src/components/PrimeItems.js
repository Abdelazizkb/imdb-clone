import React,{useState,useEffect} from 'react';
import { CarouselData } from "../bd";
import Swipe from "react-easy-swipe";
import PrimeItem from './PrimeItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


export default function PrimeItems() {
    return (
      <Swiper modules={[Navigation]}  slidesPerView={"auto"} spaceBetween={30} navigation>
       {CarouselData.map((slide, index) => {
            return (
               <SwiperSlide key={index} ><PrimeItem slide={slide} /></SwiperSlide>

            );
            
          })}
      </Swiper>
    );
  }
