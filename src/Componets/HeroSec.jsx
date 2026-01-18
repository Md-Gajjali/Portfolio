import React from 'react'
import Container from './Container'
import Flex from './Flex'
import front from '../assets/front.jpg'

const HeroSec = () => {
  return (
    <>
      <Container>
        <Flex className='items-center'>
          <div className='w-[50%] mt-20 '>
            <div className='leading-13 animate-blurred-fade-in mt-20 '>
              <h4 className='text-white'>Hello, I'm</h4>
              <h1 className='font-inter font-bold text-5xl'>Emam Gajjali</h1>
              <p className='text-[20px]'>Frontend Developer</p>
            </div>
          </div>
          <div className='w-[50%] animate-blurred-fade-in'>
            <div className='border-none'>
              <img src={front} alt="" className=' mt-20 ' />
            </div>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default HeroSec
