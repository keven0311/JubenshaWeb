import React, { useState } from 'react'
import '../styles/Carousel.css'
import CarouselThumbnail from './CarouselThumbnail';

interface CarouselProps{
    children: React.ReactNode[];
}

const Carousel:React.FC<CarouselProps> = ({children }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((prev) => (prev == 0 ? children.length - 1 : prev - 1))
    }

    const next = () => {
        setCurr((prev) => (prev+1) % children.length);
    }

    const goToSlide = (index:number) => {
        setCurr(index);
    }

  return (
    <div className='carousel-wrapper'>
        <div className="carousel"
            style={{ transform: `translateX(-${curr * 100}%)`}}>
            {children}
        </div>
        <div className="carousel-button-div">
            <button className='carousel-button' onClick={prev}>
                {"<"}
            </button>
            <button className='carousel-button' onClick={next}>
                {">"}
            </button>
        </div>
        <div className="carousel-preview">
            {children.map((_,index) => (
                <div 
                    className={`carousel-preview-image-div ${index === curr ? 'active' : ''}`}
                    key={index}
                    onClick={() => goToSlide(index)}>
                        {/* {React.cloneElement(children[index] as React.ReactElement, {className: 'thumbnail'} )} */}
                        <CarouselThumbnail slide={children[index]}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carousel