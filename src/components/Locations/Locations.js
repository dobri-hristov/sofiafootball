import React, { useContext } from "react";
import classes from "./Locations.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/ContextWrapper';
import { useHistory } from "react-router-dom";

const Locations = ({ page }) => {
    const { locations } = useContext(AuthContext)
    const mapData = !page ? locations.slice(0, 6) : locations;
    const history = useHistory();
    
    const handleClick = (name) => {
        history.push(`терени/${name}`)
    }

    return (
        <div className={classes.container}>
            <div className={`${classes.locations} ${page ? classes.page : ""}`}>
                <div className={classes.locations__content}>
                    <h2 className={classes.locations__content__title}>Терени в София</h2>
                    <div className={classes.locations__content__gallery}>
                        {mapData.map(({ name, mainImg, adress }) => (
                            <div className={classes.gallery__item} key={name} onClick={() => handleClick(name)}>
                                <img
                                    src={mainImg}
                                    alt={name}
                                    className={classes.gallery__item__img}
                                />
                                <div className={classes.gallery__item__tag}>{name}</div>
                                <div className={classes.overlay} />
                                <div className={classes.gallery__item__content}>
                                    <IoLocationOutline />
                                    <h2 className={classes.gallery__item__content__location}>
                                        {adress.district}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!page && (
                        <div className={classes.locations__content__viewmore}>
                            <Link to="/терени">
                                вижте всички <BsArrowRight />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Locations;
