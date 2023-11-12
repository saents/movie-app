import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {setSelectedMovie, setIsPlaying} from "../../../store/reducers/movies.reducer.js";

import images from "../../../assets/index.js";
import s from "../index.module.scss";

const CorouselItem = ({film}) => {

    const dispatch = useDispatch();
    const {isPlaying} = useSelector(state => state.movies);
    const handlePlayButton = () => {
        dispatch(setSelectedMovie(film))
        setTimeout(() => {
            !isPlaying &&
            dispatch(setIsPlaying(true));
        }, 2000);
    }

    return (
        <div key={film.Id} onClick={handlePlayButton} className={s.carousel_item}>
            <img src={images[film.CoverImage]} alt="image"/>
        </div>
    );
};

export default CorouselItem;