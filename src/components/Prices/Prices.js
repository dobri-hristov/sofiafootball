import React from 'react'
import Button from "./../../UI/Button/Button";
import classes from './Prices.module.scss'
import DiscountLocation from '../DiscountLocation/DiscountLocation'

const Prices = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Цени</div>
            <div className={classes.info}>
                <div className={classes.info__about}>
                    <p className={`${classes.info__title} ${classes.first}`}>Цените за всяко игрище варират според</p>
                    <ul>
                        <li>- Сезона</li>
                        <li>- Съдия (по избор)</li>
                        <li>- Големина на игрището</li>
                        <li>- Времетраене на футболната среща</li>
                        <li>- Видеозаснемане на футболната среща (по избор)</li>
                    </ul>
                </div>
                <div className={classes.info__fields}>
                    <p className={`${classes.info__title} ${classes.second}`}>За избор на терен и/или резервация</p>
                    <div className={classes.info__fields__cta}>
                        <Button to="/терени">Терени</Button>
                        <Button to="/контакти">Контакти</Button>
                    </div>
                </div>
                <div className={classes.info__offers}>
                    <p className={`${classes.info__title} ${classes.third}`}>Седмични оферти</p>
                    <div>
                        <DiscountLocation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
