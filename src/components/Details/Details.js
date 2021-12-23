import React from 'react'
import classes from "./Details.module.scss";
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Details = ({ number, advantages, bistro }) => {
    return (
        <div className={classes.container}>
            <div className={classes.container__check}>
                <div className={classes.title}>Телефон</div>
                <div className={classes.info}>
                    <p className={classes.even}>{number}</p>
                </div>
            </div>
            <div className={classes.container__check}>
                <div className={classes.title}>Удобства</div>
                <ul className={classes.info}>
                    {
                        advantages.map((element, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`${classes.advantage} ${index % 2 === 0 ? classes.even : classes.odd}`}
                                >
                                    <p>{element}</p>
                                    <AiOutlineCheckCircle className={classes.info__icon} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={classes.container__check}>
                <div className={classes.title}>Заведение</div>
                <div className={classes.info}>
                    <div className={classes.even}>
                        {bistro ? <p>Да</p> : <p>Не</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
