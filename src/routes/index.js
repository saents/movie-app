import React from 'react';
import { Route, Routes } from "react-router-dom";
import { URL_ROUTES } from "./routes.js";
import { Genres, Home, Movies, TVShows, WatchLater } from "../pages/index.js";

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path={URL_ROUTES.home.url} element={<Home/>}></Route>
            <Route path={URL_ROUTES.genres.url} element={<Genres/>}></Route>
            <Route path={URL_ROUTES.movies.url} element={<Movies/>}></Route>
            <Route path={URL_ROUTES.TVShows.url} element={<TVShows/>}></Route>
            <Route path={URL_ROUTES.watchLater.url} element={<WatchLater/>}></Route>
        </Routes>
    );
};

export default CustomRoutes;