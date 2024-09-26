import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
const screenWidth = window.innerWidth

const Slider = () => {
    const[movieList,setMovieList] = useState([])
    const elemRef = useRef()

    useEffect(()=>{
        getTrendingMovies()
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(response=>{
            // console.log(response.data.results)
            setMovieList(response.data.results)
        })
    }

    const slideRight = (element)=>{
        element.scrollLeft += screenWidth-110
    }
    const slideLeft = (element)=>{
        element.scrollLeft -= screenWidth-110
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>slideLeft(elemRef.current)} />
        
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>slideRight(elemRef.current)} />

        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elemRef}>
            {movieList.map((item)=>(
                <img 
                src={IMAGE_URL+item.backdrop_path} 
                className='min-w-full object-cover object-left-top md:h-[310px] mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' 
            />
            ))}
        </div>
    </div>
  )
}

export default Slider