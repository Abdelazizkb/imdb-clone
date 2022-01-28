import React from 'react';

function Item({slide}) {
  return    <div className="relative flex flex-col items-start ">
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  
                  className="block h-44 xl:h-64 w-item-lg xl:w-item "
                />
                <p className="text-white  text-start font-medium text-md xl:text-lg  w-item-lg xl:w-item break-words">Watch Our Interview From Sundance 2022</p>
            </div>
}

export default Item;
