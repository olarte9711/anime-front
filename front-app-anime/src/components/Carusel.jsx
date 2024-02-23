
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/home/osvargas/Descargas/front-app-anime/front-app-anime/front-app-anime/src/components/styles.css';

import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { AnimeCard } from './AnimeCard';
import { getAnimeData } from '../helpers/getDataHelper';

export const Carusel = ({anime}) => {
    const [swiperRef, setSwiperRef] = useState(null);

    const {animes} =  getAnimeData(anime)

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
        loop={false}
        scrollbar = {{ draggable:true}}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
        breakpoints={{
          120: { slidesPerView: 1 },
          480: { slidesPerView: 1},
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
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
      </Swiper>
    </>
  );
}
