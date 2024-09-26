import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='relative text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-2px] after:left-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left mb-2'>
        <Icon />
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem