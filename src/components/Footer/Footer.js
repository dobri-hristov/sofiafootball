import React from "react";
import Button from "../../UI/Button/Button";
import { FaYoutube, FaInstagram, FaTwitter, FaSnapchatGhost, FaFacebook, FaTiktok } from "react-icons/fa";
import classes from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";

const socials = [
    <FaYoutube />,
    <FaInstagram />,
    <FaTwitter />,
    <FaTiktok />,
    <FaSnapchatGhost />,
    <FaFacebook />,
];

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div className={classes.footer__newsletter}>
                    <h4 className={classes.footer__newsletter__headline}>
                        Абонирай се за SofiaFootball и ще получаваш пръв нашите седмични оферти
                    </h4>
                    <div className={classes.footer__newsletter__form}>
                        <input className={classes.input} type="email" placeholder="Имейл адрес" />
                        <Button>Абонирай се</Button>
                    </div>
                </div>
                <div className={classes.footer__base}>
                    <Logo />
                    <span className={classes.footer__base__year}>
                        SofiaFootball&nbsp;&copy;&nbsp;{new Date().getFullYear()}
                    </span>
                    <ul className={classes.footer__base__socials}>
                        {socials.map((icon, index) => (
                            <li key={index + 1}>{icon}</li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
