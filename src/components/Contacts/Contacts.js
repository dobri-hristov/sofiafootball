import React, { useContext } from 'react'
import classes from "./Contacts.module.scss";
import { AuthContext } from '../../context/ContextWrapper';
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Contacts = () => {
    const { locations } = useContext(AuthContext)
    const history = useHistory();

    const socials = [
        <FaYoutube />,
        <FaInstagram />,
        <FaTiktok />,
        <FaFacebook />,
    ];

    const handleClick = (name) => {
        history.push(`терени/${name}`)
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>Контакти</div>
            <ul className={classes.info}>
                {
                    locations.map(loc => (
                        <li key={loc.name} className={classes.info__row}>
                            <p className={classes.info__row__location}
                                onClick={() => handleClick(loc.name)}>{loc.name}</p>
                            <p className={classes.info__row__number}>{loc.number}</p>
                            <ul className={classes.info__row__icons} >
                                {
                                    socials.map((icon, index) => (
                                        <li key={index + 1}>{icon}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contacts
