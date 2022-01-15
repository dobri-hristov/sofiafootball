import React from "react";
import Hero from "../components/Hero/Hero";
import SingleLocation from "../components/SingleLocation/SingleLocation";
import useScrollToTop from "../hooks/useScrollToTop";
import { useParams } from "react-router-dom";

const Location = () => {
    useScrollToTop();
    const { name } = useParams()

    return (
        <Hero isDynmic>
            <SingleLocation name={name} />
        </Hero>
    );
};

export default Location;
