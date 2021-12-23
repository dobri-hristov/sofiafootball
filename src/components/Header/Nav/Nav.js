import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle}>
                    <Link to="/терени">Терени</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/цени">Цени</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/контакти">Контакти</Link>
                </li>
            </ul>
            <Button to="/booknow" className={classes.booknow} onClick={menuToggle}>
               Запази час
            </Button>
        </nav>
    );
};

export default Nav;
