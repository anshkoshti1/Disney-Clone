import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import HrMovieCard from './HrMovieCard'

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null)

  useEffect(() => {
    getMovieByGenreId()
  }, [genreId])

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(response => {
      setMovieList(response.data.results)
    })
  }

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 500
    }
  }

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 500
    }
  }

  return (
    <div className='relative'>
      <IoChevronBackOutline 
        onClick={slideLeft} 
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute 
        ${index_%3==0?'mt-[70px]':'mt-[150px]'} `} 
      />

      <div 
        className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <>
          {index_%3==0 ?<HrMovieCard movie={item} /> : <MovieCard key={index} movie={item} />}
          </>
        ))}
      </div>

      <IoChevronForwardOutline 
        onClick={slideRight} 
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 
        ${index_%3==0?'mt-[70px]':'mt-[150px]'}`} 
      />
    </div>
  )
}

export default MovieList
