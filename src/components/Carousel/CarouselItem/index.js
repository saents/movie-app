import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { setSelectedMovie, setIsPlaying, setSeenFilmsIds } from "../../../store/reducers/movies.reducer.js";

import images from "../../../assets/index.js";
import s from "../index.module.scss";

// eslint-disable-next-line react/prop-types
const CorouselItem = ({film}) => {

    const dispatch = useDispatch();
    const {isPlaying, seenFilmsIds} = useSelector(state => state.movies);

    const handlePlayButton = () => {
        const filmId = +film.Id;

        if(!seenFilmsIds.includes(filmId)) {
            const updatedSeenFilmsIds = [...seenFilmsIds, filmId];
            dispatch(setSeenFilmsIds(updatedSeenFilmsIds));
            sessionStorage.setItem('seenFilms', JSON.stringify(updatedSeenFilmsIds));
        }

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