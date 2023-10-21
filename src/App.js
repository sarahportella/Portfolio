import React from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation , Autoplay} from 'swiper/modules';

function App() {
  return (
    <div className="container2">
      <section className="frame">
          <div id='title'>
            <h3>Portfólio 1</h3>
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
        

        <SwiperSlide>
          <div class='slide'id="slide1">
            <div class='info'>
              <a href="https://www.behance.net/gallery/156776771/APS-Plus" target='_blank'></a>
              <h4>APS Plus</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide'id="slide2">
            <div  id='info 2' class='info'>
              <a href="https://www.behance.net/gallery/173146103/Portfolio-Poda-Facil-Website" target='_blank'></a>
              <h4>Poda Fácil</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide'id="slide3">
            <div class='info'>
              <a href="https://www.behance.net/gallery/148971703/Portfolio-Estacao-Povoar" target='_blank'></a>
            <h4>Estação Povoar</h4>
            <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide'id="slide4">
            <div class='info'>
              <a href="https://www.behance.net/gallery/148526145/Portfolio-Doullyta" target='_blank'></a>
              <h4>Doullyta</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide'id="slide5">
            <div class='info'>
              <a href="https://www.behance.net/gallery/148021153/Portfolio-Matheus-Store-(catalogo)" target='_blank'></a>
              <h4>Catálogo</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide'id="slide6">       
            <div class='info'>
              <a href="https://www.behance.net/gallery/132534857/Portfolio-Tarefas-Jr" target='_blank'></a>
              <h4>Tarefas Jr.</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide' id="slide7">
            <div class='info'>
              <a href="https://www.behance.net/gallery/123493893/Portfolio-App-se" target='_blank'></a>
              <h4>App-se</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class='slide' id="slide8">
            <div class='info'>
              <a href="https://www.behance.net/gallery/181122147/Portfolio-Website-Vertuno" target='_blank'></a>
              <h4>Vertuno</h4>
              <p>Lorem ipsum dolor sit amet. Sed praesentium unde qui architecto unde sed saepe deserunt et modi dolorem.</p>
            </div>
          </div>
        </SwiperSlide>

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
