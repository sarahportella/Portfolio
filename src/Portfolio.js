import React, { useEffect, useState } from 'react';
import './portfolio.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation , Autoplay} from 'swiper/modules';

import { Info } from './data/Info';

import NextArrow from './images/next.png'
import PreviewArrow from './images/prev.png'

function Portfolio() {

    const [info, setInfo] = useState([])
    const [swiper, setSwiper] = useState(null);
    const [index, setIndex] = useState(0);

      // por algum motivo os slides estão sendo contabilizados ao contrario
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
        setIndex(swiper.realIndex + 1)
      console.log(swiper)
      }
    },[swiper])

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
        initialSlide={5} 
        onSwiper={setSwiper} 
        onSlideChangeTransitionStart={handleSlideChange}
        grabCursor={true}
        centeredSlides={true}
         autoplay={{
           delay: 10000,
           disableOnInteraction: false,
         }}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0, 
          depth: 60,   // Ajuste esse valor para a profundidade desejada
          modifier: -30, // Ajuste esse para  para diminuir o espaço entre eles (quanto menor, mais proximos)
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
                {
                  index == item.id ? 
                 <div className='btn-prev' onClick={handleNext}><img src={PreviewArrow}/></div>
                 : ''
                }
                   {
                  index == item.id ? 
                 <div className='btn-next' onClick={handlePrev}><img src={NextArrow}/></div>
                 : ''
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

export default Portfolio;
