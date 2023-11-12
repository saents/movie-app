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
        <Card className={s.home_content_TenderedInfo}>
            <Paragraph className={s.home_content_TenderedInfo_Category} strong>{Category.toUpperCase()}</Paragraph>
            <div>
                <img width={500} src={TenderedFilmLogo} alt="Film Logo" />
            </div>
            <div>
                <Paragraph className={s.home_content_TenderedInfo_ReleaseYear}>{`${ReleaseYear} ${MpaRating} ${hours}h ${minutes}m`}</Paragraph>
                <Paragraph className={s.home_content_TenderedInfo_Description}>{Description}</Paragraph>
            </div>
            <div className={s.home_content_actions}>
                <Button onClick={handlePlayButton}
                        icon={ isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
                        className={s.playButton}
                >
                    {isPlaying ? 'Stop' : 'Play'}
                </Button>
                <Button className={s.moreInfoButton}>
                    More Info
                </Button>
            </div>
        </Card>
    );
};

export default TenderedFilm;