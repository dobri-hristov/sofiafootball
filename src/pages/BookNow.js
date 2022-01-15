import React from "react";
import Hero from "../components/Hero/Hero";
import Reservation from "../components/Reservation/Reservation";
import useScrollToTop from "../hooks/useScrollToTop";

const BookNow = () => {
    useScrollToTop();

    return (
        <Hero isDynmic>
            <Reservation/>
        </Hero>
    );
};

export default BookNow;
