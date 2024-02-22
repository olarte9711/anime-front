
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/home/osvargas/Descargas/front-app-anime/front-app-anime/front-app-anime/src/components/styles.css';

// import required modules
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { AnimeCard } from './AnimeCard';
import { useFetchAnime } from '../hooks/useFetchAnime';

export const Carusel = ({anime}) => {
    const [swiperRef, setSwiperRef] = useState(null);

    const {animes} =  useFetchAnime(anime)

  return (
    <>
  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={40}
        pagination={{
          type: 'fraction',
          clickable: true
        }}
        scrollbar = {{ draggable:true}}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        {
          animes.map( (anime)  => (
            <SwiperSlide>
              <AnimeCard
                key={anime.id}
                {...anime}
              />
            </SwiperSlide>
          ))
        }
        <SwiperSlide> <AnimeCard/> </SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
      </Swiper>
    </>
  );
}
