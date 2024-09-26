import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        PopularMovies : null,
        TopRated : null,
        UpcomingMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload
        },
        addTopRated : (state,action) => {
            state.TopRated = action.payload
        },
        addUpcomingMovies : (state,action) => {
            state.UpcomingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTopRated , addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;