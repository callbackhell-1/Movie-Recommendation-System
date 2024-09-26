import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryConatiner = () => {
  const movies = useSelector(store => store.movies)
  // console.log(NowPlaying);
  // const popular = useSelector(store => store.movies.PopularMovies)

  // console.log(popular);
  
  
  return (

    <div className='bg-black'>
      <div className=' -mt-52 pl-12 relative z-20'>
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}></MovieList>
      <MovieList title = {"Top Rated"} movies = {movies.TopRated}></MovieList>
      <MovieList title = {"Popular"} movies = {movies.PopularMovies}></MovieList>
      <MovieList title = {"Upcoming Movies"} movies = {movies.UpcomingMovies}></MovieList>
      {/* <MovieList title = {"Horror"} movies = {movies.nowPlayingMovies}></MovieList> */}
      </div>
      {/* 
        MovieLIst(popular)
         moviecard
        MovieLIst(trending now)
        MovieLIst(horror)
      */}
    </div>
  )
}

export default SecondaryConatiner