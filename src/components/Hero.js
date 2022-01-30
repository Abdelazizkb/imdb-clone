import React from 'react'
import Carousel from './Carousel'
import NextList from './NextList'



function Hero() {
    return (
     <div className="container px-4 xl:px-28 mx-auto  flex items-start mt-3 md:mt-8">
        <Carousel/>  
        <NextList/>
     </div>   
    )
}

export default Hero
