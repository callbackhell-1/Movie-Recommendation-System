import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import {addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTrending = () => {

    const dispatch = useDispatch();
    
    const trending = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTION)

        const JSON = await data.json();

        dispatch(addUpcomingMovies(JSON.results))
    }

    useEffect(() => {
        trending();
    },[])
}

export default useTrending