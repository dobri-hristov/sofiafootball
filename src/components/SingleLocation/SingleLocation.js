import React, { useContext } from 'react'
import classes from "./SingleLocation.module.scss";
import CustomCarousel from '../Carousel/Carousel'
import Details from '../Details/Details'
import Map from '../Map/Map'
import { AuthContext } from '../../context/ContextWrapper';

const SingleLocation = ({ name }) => {
    const { locations } = useContext(AuthContext)
    const location = locations.filter(el => el.name === name)

    return (
        <div className={classes.container}>
            <div className={classes.title}>{name}</div>
            <div className={classes.info}>
                {
                    location.map(loc => (
                        <div className={classes.content} key={loc.name}>
                            <div className={classes.content__info}>
                                <CustomCarousel images={loc.images} />
                                <div className={classes.content__info__about}>
                                    <div className={classes.content__info__about__title}>
                                        Футболни терени "{loc.name}", {loc.adress.district}
                                    </div>
                                    <div className={classes.content__info__about__us}>{loc.about}</div>
                                </div>
                                <div className={classes.content__info__map}>
                                    <Map
                                        name={loc.name}
                                        adress={loc.adress}
                                        coordinates={loc.coordinates} />
                                </div>
                            </div>
                            <Details number={loc.number} advantages={loc.advantages} bistro={loc.bistro} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default SingleLocation
