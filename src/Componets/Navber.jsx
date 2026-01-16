import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiHome } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import ShinyText from '../Componets/ShinyText ';



const Navber = () => {
  return (
    <>
        <nav className=' '>
            <Container>
                <Flex className='justify-between items-center px-5 mt-10 '>
                    <div>
                        <ShinyText
                        text="✨Emam Gajjali"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        className='text-[20px]'
                        />
                    </div>
                    <ul className='flex gap-10 text-[21px]'>
                        <li><HiHome /></li>
                        <li><BsFillPersonFill /></li>
                        <li><MdOutlineWork /></li>
                        <li><FaBook /></li>
                        <li><MdOutlineSms /></li>
                    </ul>
                    <div>
                        <FaMoon />
                    </div>
                </Flex>
            </Container>
        </nav>
    </>
  )
}

export default Navber
