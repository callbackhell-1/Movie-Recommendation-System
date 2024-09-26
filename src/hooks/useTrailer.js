import  { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';

const useTrailer = () => {
    const dispatch = useDispatch();

    const mov = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/1160018/videos?language=en-US', API_OPTION)

        const JSON = await data.json();

        

        // console.log(JSON.results[0]);
        // setTrailerId(JSON.results[0])
        dispatch(addTrailerVideo(JSON.results[0]))
    }

    useEffect(() => {
        mov();
    }, [])
}


export default useTrailer