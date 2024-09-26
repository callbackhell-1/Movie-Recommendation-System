import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryConatiner from "./SecondaryConatiner"


const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryConatiner></SecondaryConatiner>
      {/* 
        MainContainer
          - background movie
          - movie title
        Secondary container
          - movie cards
      */}
    </div>
  )
}

export default Browse