import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { addTopRated } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTrending = () => {

    const dispatch = useDispatch();
    
    const trending = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)

        const JSON = await data.json();

        dispatch(addTopRated(JSON.results))
    }

    useEffect(() => {
        trending();
    },[])
}

export default useTrending