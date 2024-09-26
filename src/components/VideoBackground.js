import React from 'react'
import {  useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';
import useTrending from '../hooks/useTrending';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from "../hooks/useUpcoming";

const VideoBackground = ({ id }) => {
  // const [traileId,setTrailerId] = useState(null);
  const Trailer = useSelector(store => store.movies.trailerVideo)

  useTrailer()
  useTrending();
  useTopRated();
  useUpcoming();

  return (
    <div className='w-full'>
      <iframe 
        className=' w-full aspect-video'
        src=  {"https://www.youtube.com/embed/da7lKeeS67c?si=AO4B8EjXi0JsUSfV" + Trailer?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
      >
      </iframe>
    </div>
  )
}

export default VideoBackground