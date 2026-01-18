import React from 'react'
import Container from './Container'
import Flex from './Flex'
import apon from '../assets/apon.jpg'
import MiniCards from './MiniCards'
import { IoIosRibbon } from "react-icons/io";


const About = () => {
    return (
        <>
            <div className=' mt-100 animated'>
                <Container>
                    <div className='w-full text-center mx-auto mt-50'>
                        <p className='text-[18px]'>My Intro</p>
                        <h2 className='text-2xl font-bold'>About Me</h2>
                    </div>
                    <Flex className='mt-20'>
                        <div className='w-[40%] animate-fade-in-right'>
                            <img src={apon} alt="" className='w-77  h-77 rounded-2xl' />
                        </div>
                        <div className='w-[60%] '>
                            <Flex className='justify-between'>
                                <MiniCards 
                                    icons={<IoIosRibbon />}
                                    heading='Experience'
                                    title='8 Month work'
                                />
                            </Flex>
                            <div className='mt-10'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eius deserunt. Doloremque aut esse explicabo exercitationem eos, sequi dolorum ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, quam!</p>
                            </div>
                        </div>
                    </Flex>
                </Container>
            </div>


        </>
    )
}

export default About
