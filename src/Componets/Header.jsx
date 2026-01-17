import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ShinyText from './ShinyText '
import { FaMoon } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
      <Container>
        <Flex className='justify-between mt-10 items-center'>
            <div className='w-full'>
                <ShinyText
                text="✨ Gajjali"
                speed={2}
                delay={0}
                color="#A395E9"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                className='text-[20px] font-inter font-bold '
                />
            </div>
            <div className='text-[#A395E9]'>
                <FaMoon />
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
