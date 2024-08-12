import React, { ReactElement } from 'react'

interface CarouselThumbnailProps {
    slide: React.ReactNode;
}

const CarouselThumbnail: React.FC<CarouselThumbnailProps> = ({slide}) => {
  return (
    <>
        {React.cloneElement(slide as ReactElement, {className: 'thumbnail'})}
    </>
  )
}

export default CarouselThumbnail