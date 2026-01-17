import React from 'react'
import Container from './Container'
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import { FloatingDock } from "../Componets/floating-dock";
import {IconHome} from "@tabler/icons-react";



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
            <BsFillPersonFill  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Components",
          icon: (
            <MdOutlineWork className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Aceternity UI",
          icon: (
            <FaBook className='h-full w-full text-neutral-500 dark:text-neutral-300' />
          ),
          href: "#",
        },
        {
          title: "Twitter",
          icon: (
            <MdOutlineSms  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },

      ];
  return (
    <>
        <nav className=' '>
            <Container>
              <div className="flex fixed items-center justify-end  absolute bottom-10 right-4 w-full visibility:visible opacity: 1 transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: 0.4s, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.1s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.1s;">
                    <FloatingDock
                      // only for demo, remove for production
                      mobileClassName="translate-y-30"
                      items={links} />
              </div>   
            </Container>
        </nav>
    </>
  )
}

export default Navber
