import React, { Fragment } from "react";
//import Hero from "../components/Hero/Hero";
import SingleLocation from "../components/SingleLocation/SingleLocation";
import useScrollToTop from "../hooks/useScrollToTop";
import { useParams } from "react-router-dom";
import field from '../assets/field.jpg'

const styles = {
    backgroundImage: `url(${field})`,
    backgroundSize: 'cover',
}

const Location = () => {
    useScrollToTop();
    const { name } = useParams()

    return (
        <div style={styles}>
            {/* <Hero isDynmic>Location page - {location}</Hero> */}
            <SingleLocation name={name} />
        </div>
    );
};

export default Location;
