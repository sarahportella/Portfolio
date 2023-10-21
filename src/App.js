import React from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation , Autoplay} from 'swiper/modules';

import { Info } from './data/Info';

function App() {
  return (
    <div className="container2">
      <section className="frame">
          <div id='title'>
            <h3>Portfólio</h3>
          </div>
        <p>Conheça os nossos mais novos projetos:</p>
      </section>
      <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 400,
          modifier: 2.5,
          
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      > 
        
        {Info?.map(item => {
          return(
            <SwiperSlide>
              <div class='slide'id={`slide${item.id}`}>
                <div class='info'>
                  <a href={`${item.link}`} target='_blank'></a>
                  <h4>{item.titulo}</h4>
                  <p>{item.texto}</p>
                </div>
              </div>
            </SwiperSlide>      
          )
        })}
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
      </div>
    </div>
  );
}

export default App;
