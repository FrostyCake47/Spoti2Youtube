import React from 'react'
import Navbarbtn from './navbarbtn'
import {Roboto_Slab} from "next/font/google";

const RobotoSlab = Roboto_Slab({weight: "400", subsets: ["latin"]});


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-neutral-black py-5 '>
        <div className={RobotoSlab.className}>
            <h1 className='text-[30px] mx-5 sm:px-10 text-amber-500'>SpotiSync</h1>
        </div>
        <div className='flex'>
            <Navbarbtn name={"Home"}/>
            <Navbarbtn name={"FAQ"}/>
            <Navbarbtn name={"Contacts"}/>
        </div>
    </div>
  )
}

export default Navbar