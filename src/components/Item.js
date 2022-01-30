import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Item({slide}) {
  return    <div className="relative flex flex-col items-start w-item-md lg:w-item-lg xl:w-item">
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  
                  className="block h-44 xl:h-64 w-full "
                />
                <p className="w-full text-white font-medium text-sm lg:text-md xl:text-lg text-start text-left">Watch Our Interview From Sundance 2022</p>
            </div>
}

export default Item;
