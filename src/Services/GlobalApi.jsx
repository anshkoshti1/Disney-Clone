import axios from 'axios'


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=dd767a14cf66c0b137ba7095c87974c8';

const getTrendingVideos = axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=dd767a14cf66c0b137ba7095c87974c8&language=en-US')

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,  
    getMovieByGenreId
} 