import React from 'react';
import Slider from 'react-slick';
import { useSelector } from "react-redux";

import CarouselItem from "./CarouselItem/index.js";

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const CustomCarousel = () => {
    const {movies} = useSelector(state => state.movies);

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 8,
        slidesToScroll: 2,
        variableWidth: true,
    }
    return (
        <Slider {...settings}>
            {movies.map(film => (
                <CarouselItem key={film.Id} film={film}/>
            ))}
        </Slider>
    );
};

export default CustomCarousel;