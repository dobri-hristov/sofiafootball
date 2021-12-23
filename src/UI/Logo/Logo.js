import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <Link to="/" className={classes.logo}>
            <img src={logo} alt="logo" />
            <span>SofiaFootball</span>
        </Link>
    );
};

export default Logo;
