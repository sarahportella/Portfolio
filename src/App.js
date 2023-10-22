import React, { useEffect, useState } from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation , Autoplay} from 'swiper/modules';

import { Info } from './data/Info';
import NextArrow from './images/next.png'
import PreviewArrow from './images/prev.png'

function App() {

    const[info, setInfo] = useState([])
    const [swiper, setSwiper] = useState(null);
    const [index, setIndex] = useState(8);


      const handlePrev = () => {
        if (swiper) {
          // Avança para o próximo slide
          swiper.slideNext();
        }
      };
    
      const handleNext = () => {
        if (swiper) {
          // Volta para o slide anterior
          swiper.slidePrev();
        }
      };
    
      const handleSlideChange = () => {
        if (swiper) {
          setIndex(swiper.realIndex + 1);
        }
      };

    useEffect(()=>{
      if(swiper){
        console.log(index);
      }
    },[index])

    useEffect(()=>{
      setInfo(Info);
    },[])


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
        onSwiper={setSwiper}
        onSlideChangeTransitionStart={handleSlideChange}
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
        
        {info?.map(item => {
          return(
            <SwiperSlide key={item.id}>
              <div className='slide'id={`slide${item.id}`}>
                <div className='info'>
                  <a href={`${item.link}`} target='_blank'></a>
                  <h4>{item.titulo}</h4>
                  <p>{item.texto}</p>
                </div>
                {index == item.id ? 
                <div className='teste'>
                 <div className='teste2' onClick={handleNext}><img src={PreviewArrow}/></div>
                 <div className='teste2' onClick={handlePrev}><img src={NextArrow}/></div>
                </div>
               : <></>
               }
              </div>
            </SwiperSlide>      
          )
        })}
        
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
      </div>
    </div>
  );
}

export default App;
