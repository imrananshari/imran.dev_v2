"use client"
import React from 'react'
import gsap, { Sine } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Anim() {

    useGSAP(()=>{
        let cards = document.querySelectorAll(".card")
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".anim-section",
                start: "top top",
                end: "2000 top",
                scrub: 3,
                pin: true
            }
        })
        cards.forEach((card)=>{
            tl.to(card,{
                transform: "translate(-50%, -120vh) rotate(200deg)",
                opacity: 0,
                ease: Sine.easeInOut
            })
        })
    })

  return (
    <div className='anim-section w-full h-screen flex flex-row justify-center items-center'>
      <div className='w-[50%] h-full flex flex-col justify-center gap-[10px] px-[15vw]'>
        <h1 className='text-[7vw] leading-none font-bold'>Our</h1>
        <h1 className='text-[7vw] leading-none font-bold'>Features</h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio repellendus ex, aut non voluptate ullam nostrum, aliquid architecto, reiciendis at natus expedita. Ipsa, alias veritatis.</p>
        <button className='py-[20px] text-[#000] bg-white rounded-[50px]'>See More Details</button>
      </div>
      <div className='w-[50%] h-full relative'>
        <div className="card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-[50px] z-[4] flex flex-col justify-between items-center p-[2vw] bg-blue-500 rotate-[-40deg]">
            <h1 className='text-[2.5vw]'>Card1</h1>
            <p className='text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed.</p>
        </div>
        <div className="card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-[50px] z-[3] flex flex-col justify-between items-center p-[2vw] bg-red-500 rotate-[-30deg]">
            <h1 className='text-[2.5vw]'>Card2</h1>
            <p className='text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed.</p>
        </div>
        <div className="card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-[50px] z-[2] flex flex-col justify-between items-center p-[2vw] bg-purple-500 rotate-[-20deg]">
            <h1 className='text-[2.5vw]'>Card3</h1>
            <p className='text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed.</p>
        </div>
        <div className="card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-[50px] z-[1] flex flex-col justify-between items-center p-[2vw] bg-pink-500 rotate-[-10deg]">
            <h1 className='text-[2.5vw]'>Card4</h1>
            <p className='text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed.</p>
        </div>
      </div>
    </div>
  )
}

export default Anim 
