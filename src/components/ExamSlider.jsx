/* eslint-disable react/prop-types */
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import ExamCard from './cards/ExamCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ExamSlider = ({Examdata, ExamMode}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay, A11y]}
    autoHeight= {true}
    spaceBetween={10}
    slidesPerView={3}
    rewind={true}
    effect= 'fade'
    fadeEffect= {{ crossFade: true }}
    style={{width:'70rem'}}
  >
    <div className='overflow-hidden'>
      {Examdata.map((data, i)=> (
      <SwiperSlide key={i} className='mx-5 max-w-xs max-h-max p-3 border border-gray-400 rounded-md  bg-white'>
        <ExamCard cardData={data} ExamMode={ExamMode} />
      </SwiperSlide>
      ))}
    </div>
  </Swiper>
  )
}

export default ExamSlider
