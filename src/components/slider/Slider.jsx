import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Tilt from 'react-parallax-tilt';

import 'swiper/css';
import './slider.scss' ;


const Slider = props => {
    SwiperCore.use([Autoplay]);
  return (
    <div className="slider">
        <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
        >
        {
            props.data.slice(1,4).map((item , index) => (
                <SwiperSlide key={index}>
                <div className="slider-item">
                    <div className="slider-item__info">
                        <div className="slider-item__info-title">
                            {item.title}
                        </div>
                        <div className="slider-item__info-des">
                            {item.description}
                        </div>
                        <Link to={`/details/${item.id}`}>
                            <Button 
                                animation = {true} 
                                icon = {<FiShoppingCart />}
                            >
                                View more
                            </Button>
                        </Link>
                        
                    </div>
                    <div className="slider-item__img">
                        <Tilt>
                            <img src={item.images} alt="" />      
                        </Tilt>       
                    </div>
    
                </div>
                </SwiperSlide>

            ))
        }
        </Swiper>

        

    </div>

  )
}

export default Slider