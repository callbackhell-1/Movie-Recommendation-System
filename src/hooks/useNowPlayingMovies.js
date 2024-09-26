import { API_OPTION } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'


const useNowPlayingMovies = () => {
    // fetch data drom tmdb and update in store
    const dispatch = useDispatch()

    const getNowPlayingMovie = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)

        const JSON = await data.json();

        // console.log(JSON);

        dispatch(addNowPlayingMovies(JSON.results))

    }

    useEffect(() => {
        getNowPlayingMovie()
    }, [])

}

export default useNowPlayingMovies