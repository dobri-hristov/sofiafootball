import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import Prices from "../components/Prices/Prices";
import field from '../assets/field.jpg'

const styles = {
    backgroundImage: `url(${field})`,
    backgroundSize: 'cover',
}

const Pricing = () => {
    useScrollToTop();
    return (
        <div style={styles}>
            {/* <Hero isDynmic>
                <div>Цените на всяко игрище варират според:
                    <p>Типът игрище</p>
                    <p>Сезонът</p>
                    <p>Времетраенето на футболната среща</p>
                </div>
            </Hero> */}
            <Prices />
        </div>
    );
};

export default Pricing;
