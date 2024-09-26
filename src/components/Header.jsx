import React, { useState } from 'react'
import logo from './../assets/Images/logo.svg'
import{HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import profile from './../assets/Images/profile.png'

const Header = () => {
    const[toggle,setToggle] = useState(false)
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img src={logo} alt="logo" className='w-[80px] object-cover md:w-[115px]' />
            <div className='hidden md:flex gap-8'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item,index)=>index<3&&(
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical}/>
                    {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
                        {menu.map((item,index)=>index>2&&(
                        <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
                    </div> : null}
                </div>
            </div>
        </div>
        <img src={profile} alt="img" className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header