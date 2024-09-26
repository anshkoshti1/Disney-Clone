import React from 'react'
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'

const HrMovieCard = ({movie}) => {
    return (
        <section className='hover:scale-110 transition-all duration-150 ease-in'>
            <img src={IMAGE_URL + movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer' />
            <h2 className='{/*flex*/} w-[110px] md:w-[260px] text-white mt-2 {/*justify-center*/}'>{movie.title}</h2>
        </section>
    )
}

export default HrMovieCard