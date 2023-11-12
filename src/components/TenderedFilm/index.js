import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Typography} from "antd";
import {setIsPlaying} from "../../store/reducers/movies.reducer.js";

import { secondsToHoursAndMinutes } from "../../utils/helpers.js";
import { CaretRightOutlined, InfoCircleOutlined, PauseOutlined, PlayCircleOutlined } from "@ant-design/icons";

import TenderedFilmLogo from '../../assets/FeaturedTitleImage.png';
import s from "../../pages/Home/index.module.scss";

const {Paragraph} = Typography;

const TenderedFilm = () => {
    const {
        Category,
        ReleaseYear,
        MpaRating,
        Duration,
        Description,
    } = useSelector(state => state.movies.selectedMovie);

    const dispatch = useDispatch();
    const {isPlaying} = useSelector(state => state.movies)
    const {hours, minutes} = secondsToHoursAndMinutes(+Duration);

    const handlePlayButton = () => {
        !isPlaying ?
        setTimeout(() => {
            dispatch(setIsPlaying(!isPlaying))
        }, 2000)
            :
            dispatch(setIsPlaying(!isPlaying))
    }

    return (
        <Card style={{background: "transparent", border: "none", marginLeft: 100}} className={s.home_content_TenderedInfo}>
            <Paragraph style={{fontSize: "1.7em", color: 'grey', letterSpacing: 5}} strong>{Category.toUpperCase()}</Paragraph>
            <div>
                <img width={500} src={TenderedFilmLogo} alt="Film Logo" />
            </div>
            <div>
                <Paragraph style={{fontSize: "1.4em", color: 'var(--tv-white_900)'}}>{`${ReleaseYear} ${MpaRating} ${hours}h ${minutes}m`}</Paragraph>
                <Paragraph style={{fontSize: "1.4em", color: 'var(--tv-white_900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{Description}</Paragraph>
            </div>
            <div className={s.home_content_actions}>
                <Button style={{fontWeight: 700}} onClick={handlePlayButton} icon={ isPlaying ? <PauseOutlined /> : <CaretRightOutlined />} className={s.playButton}>
                    {isPlaying ? 'Stop' : 'Play'}
                </Button>
                <Button style={{fontWeight: 700, color: 'var(--tv-white_900)'}} className={s.moreInfoButton}>
                    More Info
                </Button>
            </div>
        </Card>
    );
};

export default TenderedFilm;