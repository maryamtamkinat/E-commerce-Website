"use client"

import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init ({
      duration: 1000,
      once: true,
    })
},
  []);
  return (
    <section className='w-screen hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url('/hero.jpg')"}}>
      <div className='w-screen text-white flex flex-col justify-center items-center text-center'>
        <h1 className='md:text-6xl text-5xl  font-bold drop-shadow-md' data-aos="fade-up">Step Into Our Exclusive Shoe Collection</h1>
        <p className='mt-4 md:text-2xl text-xl'>Discover the Best Shoes for Every Occasion.</p>
        <button className='mt-6 px-6 py-2 bg-gray-500 duration-300 hover:bg-gray-700 rounded-md font-bold'>Shop Now</button>
      </div>
    </section>
  )
}

export default Hero
