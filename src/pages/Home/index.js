import React from 'react';
import images from "../../assets/index.js";
import TenderedFilm from "../../components/TenderedFilm/index.js";
import CustomCarousel from "../../components/Carousel/index.js";

import { MOVIES_DATA } from "../../constants/movies.js";


import s from './index.module.scss';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { useSelector } from "react-redux";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
};

const Home = () => {
    const {movies, selectedMovie, isPlaying} = useSelector(state => state.movies);
   
    return (
        <div className={s.home_container}>
            <div className={s.background_video_container}>
                {
                    isPlaying ? (
                        <video className={s.background_video} autoPlay loop muted>
                            <source src={selectedMovie['VideoUrl']} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img className={s.background_image} src={images["FeaturedCoverImage.png"]} alt=""/>
                    )
                }
            </div>

            <div className={s.home_main_content_container}>
                <div className={s.home_content_container}>
                    <TenderedFilm />
                    <div className={s.home_content_container_slider_container}>
                        <div className={s.home_content_container_slider}>
                            <CustomCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;