import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, FreeMode, EffectCoverflow, Autoplay } from 'swiper'
import { getImage } from '@/utils/getImage'

const Trending = ({ data }) => {
  return (
    <Swiper
      lazy={true}
      loop={true}
      freeMode={true}
      effect={'coverflow'}
      slidesPerView={1.5}
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.1,
          spaceBetween: 5,
        },
      }}
      modules={[Lazy, FreeMode, EffectCoverflow, Autoplay]}
    >
      {data?.results?.map((item, key) => {
        console.log(item, 'Item')
        return (
          <SwiperSlide className="relative w-1/2 rounded-2xl border-2 p-1">
            <img
              className="swiper-lazy rounded-xl"
              src={getImage(item?.backdrop_path)}
              alt="poster"
            />
            <div className="absolute bottom-1 left-1 right-1 rounded-b-xl bg-white bg-opacity-20 px-2 py-2 md:py-1 text-black backdrop-blur-xl md:bottom-2 md:left-2 md:right-2 md:space-y-6 md:rounded-2xl md:p-4">
              <p className="line-clamp-1 md:text-2xl">
                {item?.name ??
                  item?.title ??
                  item?.original_title ??
                  item?.original_name}
              </p>
              <p className="invisible h-0 w-0 font-sans line-clamp-3 md:visible md:h-auto md:w-auto">
                {item?.overview}
              </p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Trending
