import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../context/ContextWrapper';
import classes from './DiscountLocation.module.scss'
import { IoLocationOutline } from "react-icons/io5";

const DiscountLocation = ({ locationsName }) => {
    const { locations } = useContext(AuthContext)
    const history = useHistory();
    const mapData = locations.slice(0, 3)

    const handleClick = (name) => {
        history.push(`терени/${name}`)
    }

    return (
        <div className={classes.content}>
            <div className={classes.content__gallery}>
                {mapData.map(({ id, name, mainImg, adress }) => (
                    <div className={classes.gallery__item} key={id} onClick={() => handleClick(name)}>
                        <div className={classes.gallery__item__main}>
                            <img
                                src={mainImg}
                                alt={name}
                                className={classes.gallery__item__main__img}
                            />
                            <div className={classes.gallery__item__main__tag}>{name}</div>
                            <div className={classes.overlay} />
                            <div className={classes.gallery__item__main__content}>
                                <div className={classes.gallery__item__main__content__location}>
                                    <IoLocationOutline /> {adress.district} - {name}
                                </div>
                                <div className={classes.gallery__item__main__content__offers}>
                                    <p>Футбол 6х6 - 50 лв/ч</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscountLocation
