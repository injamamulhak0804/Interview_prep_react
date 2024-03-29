import React, { useState } from 'react'
import { CAROUSEL_IMG } from '../../utils/constants'
const Parent = () => {
  const [img, setImg] = useState(CAROUSEL_IMG)
  const [change, setChange] = useState(0)

  const handleClick = (dir) =>{
    if(dir == "left"){
      if(change > 0) setChange(change - 1); 
      // else return
    }
    if(dir == "right"){
      if(change < 2) setChange(change + 1);
      else return;
    }
  }


  return (
    <div>
      <h1 className='text-start text-3xl font-semibold m-10'>
        Image Carousel
      </h1>
     <div className=''>
     <div className='flex max-w-lg mx-auto justify-between items-center'>
        <div>
          <button onClick={()=> handleClick("left")} className='px-6 py-2 bg-black text-white rounded-lg'>&lt;</button>
        </div>
        <div>
          <img src={img[change]} alt="" />
        </div>
        <div>
        <button onClick={()=> handleClick("right")} className='px-6 py-2 bg-black text-white rounded-lg'>&gt;</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Parent