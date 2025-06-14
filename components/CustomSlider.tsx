"use client "

import React from 'react'
import { IdeaCard } from './Cards'

const CustomSlider = ({slidesData}: {slidesData: SlideCardProps[]}) => {
    const handleClick = (index: number) => {
        console.log(`Button clicked for slide ${index + 1}`);
    }
  return (
    <div className='w-full'>
        <div className='flex w-full overflow-x-auto gap-4 py-4 '>
            {
            slidesData.map((slide, index) => (
                <IdeaCard
                key={index}
                title={slide.title}
                description={slide.description}
                imageUrl={slide.imageUrl}
                buttonText={slide.buttonText}
                handleClick={slide.handleClick}
                />
            ))}
        </div>   
        <div>
            {slidesData.map((slide, index) => (
              <button key={index} onClick={slide.handleClick} className={` rounded-full h-1 w-1`}></button>
            ))}
        </div>     
    </div>

  )
}

export default CustomSlider