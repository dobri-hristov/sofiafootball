import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const BookNow = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynmic>ОчакваЙте скоро!</Hero>
        </Fragment>
    );
};

export default BookNow;
