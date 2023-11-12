import { combineReducers } from "@reduxjs/toolkit";
import moviesSlice from './movies.reducer.js';
import sidebarSlice from './sidebar.reducer.js';

const rootReducer = combineReducers({
    movies: moviesSlice,
    sidebar: sidebarSlice,
});

export default rootReducer;