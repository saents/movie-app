import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        seenFilmsIds: [],
        movies: [],
        selectedMovie: {},
        isPlaying: false,
    },
    reducers: {
        setSeenFilmsIds: (state, action) => {
            state.seenFilmsIds = action.payload;
        },
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
    setSeenFilmsIds,
} = moviesSlice.actions;

export default moviesSlice.reducer;