import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles.css'

const CustomCarousel = ({ images }) => {
    return (
        <Carousel
            showArrows={true}
            autoPlay
            interval='7000'
            infiniteLoop
            showThumbs={false}
            className="container"
        >
            {
                images.map(image => {
                    return <div className="imgContainer" key={image.id}>
                        <img src={image.path} alt={`фуболен терен снимка${image.id}`} />
                    </div>
                })
            }
        </Carousel>
    )
}

export default CustomCarousel
