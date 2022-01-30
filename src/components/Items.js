import React,{useState} from 'react';
import { today } from "../bd";
import Swipe from "react-easy-swipe";
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


export default function Items({show}) {


    return (
      <Swiper modules={[Navigation]} slidesPerView={"auto"} spaceBetween={30} navigation>
            {today.map((slide, index) => {
            return (
              <SwiperSlide key={index}><Item slide={slide} /></SwiperSlide>
            );
          })}

      ...
    </Swiper>

    );
  }
