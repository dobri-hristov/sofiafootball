import React, { Fragment } from "react";
import Button from "./../../UI/Button/Button";
import field from '../../assets/field.jpg'
import classes from "./Hero.module.scss";

const HomePageContent = () => {
    return (
        <Fragment>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <h1 className={classes.hero__content__title}>SofiaFootball</h1>
                    <span className={classes.hero__content__tagline}>
                        намерете точния терен за вашия отбор
                    </span>
                    <p className={classes.hero__content__description}>
                        Над 20 терена в цяла София
                    </p>
                    <div className={classes.hero__content__cta}>
                        <Button to="/запази час">Запази час</Button>
                        <Button to="/терени" outline>
                            Намери терен
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const Hero = ({ isDynmic, children }) => {
    return (
        <div className={classes.container}>
            <img className={classes.img} src={field} alt="футолен терен" />
            {!isDynmic && <HomePageContent />}
            {isDynmic && <div>{children}</div>}
        </div>
    );
};

export default Hero;
