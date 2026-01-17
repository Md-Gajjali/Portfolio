import React from 'react'
import Container from './Container'

const HeroSec = () => {
  return (
    <div>
      <Container>
        <div className='w-[50%] mt-20 '>
          <div className='leading-13 animate-blurred-fade-in mt-20 '>
            <h4 className='text-white'>Hello, i'm</h4>
            <h1 className='font-inter font-bold text-5xl'>Emam Gajjali</h1>
            <p className='text-[20px]'>Frontend Developer</p>
          </div>
        </div>
        <div className='w-[50%]'>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSec
