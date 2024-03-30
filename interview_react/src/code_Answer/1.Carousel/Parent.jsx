import React, { useEffect, useState } from 'react'
import { CAROUSEL_IMG } from '../../utils/constants'
const Parent = () => {

  const [img] = useState(CAROUSEL_IMG)
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePreviousClick = () =>{
    setActiveIndex(!activeIndex ? img.length - 1 : activeIndex - 1);
  }

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1)% img.length);
  }

  useEffect(()=>{
    const i = setTimeout(()=>{handleNextClick()},3000)
    return () =>{clearInterval(i)}
  },[activeIndex])


  return (
    <div>
      <h1 className='text-start text-3xl font-semibold m-10'>
        Image Carousel
      </h1>
     <div className=''>
     <div className='flex max-w-lg mx-auto justify-between items-center'>
        <div>
          <button onClick={handlePreviousClick} className='px-6 py-2 text-4xl rounded-lg'>&lt;</button>
        </div>
        <div>
          {/* <img src={img[activeIndex]} className='h-[300px] rounded-xl object-contain' alt="" /> For a better way ⬇ this also crct way */}
          {
              img.map((image, index)=> <img src={image} key={index} className={'h-[300px] duration-300 ease-in-out rounded-xl object-contain ' +( activeIndex == index ? "block" :"hidden") } alt="" />)
          }
        </div>
        <div>
        <button onClick={handleNextClick} className='px-6 py-2  text-4xl rounded-lg'>&gt;</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Parent