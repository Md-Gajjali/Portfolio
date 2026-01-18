import React from 'react'

const MiniCards = ({heading,title,icons}) => {
  return (
    <div className='w-50 h-full p-2.5 g-white -bg-opacity-10 bg-white backdrop-blur-md rounded-lg border border-white border-opacity-30">;'>
      <p className='text-primariy text-[20px]' >{icons}</p>
      <h3 className='text-white opacity-85 text-2xl '>{heading}</h3>
      <p className=' text-secondary '>{title}</p>
    </div>
  )
}

export default MiniCards
