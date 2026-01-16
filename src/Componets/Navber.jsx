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
import { FloatingDock } from "../Componets/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";



const Navber = () => {
      const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
    
        {
          title: "Products",
          icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Components",
          icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Aceternity UI",
          icon: (
            <img
              src="https://assets.aceternity.com/logo-dark.png"
              width={20}
              height={20}
              alt="Aceternity Logo" />
          ),
          href: "#",
        },
        {
          title: "Changelog",
          icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
    
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
      ];
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
                        color="#A395E9"
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
                        <div className="flex items-center justify-center h-[35rem] w-full">
                              <FloatingDock
                                // only for demo, remove for production
                                mobileClassName="translate-y-20"
                                items={links} />
                        </div>
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
