import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from "./VideoBackground"

const MainContainer = () => {

    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movies) return

    const MainMovie = movies[17];
    // console.log(MainMovie);

    const { title , overview} = MainMovie
    const { id } = MainMovie
    
  return (
    <div>
        <VideoTitle title = {title} overview = {overview}></VideoTitle>
        <VideoBackground id = {id}></VideoBackground>
    </div>
  )
}

export default MainContainer