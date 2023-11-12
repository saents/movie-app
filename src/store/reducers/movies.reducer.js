import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        selectedMovie: {},
        isPlaying: false,
    },
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setIsPlaying: (state) => {
          state.isPlaying = !state.isPlaying;
        },
        setFilterOption: (state, action) => {
            state.filter = action.payload
        }
    },
});

export const {
    setSelectedMovie,
    setMovies,
    setIsPlaying,
} = moviesSlice.actions;

export default moviesSlice.reducer;