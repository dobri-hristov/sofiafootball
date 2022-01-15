import React from 'react'
import classes from "./Reservation.module.scss";

const Reservation = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__content}>
                <div className={classes.container__content__title}>Очаквайте скоро!</div>
            </div>
        </div>
    )
}

export default Reservation
