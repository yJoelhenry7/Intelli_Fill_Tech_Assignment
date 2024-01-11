// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Images from '../assets/Image/Image';
import { Link } from 'react-router-dom';

const Carosual = () => {
    const images = [Images.banner,Images.banner,Images.banner,Images.banner,Images.banner,Images.banner,Images.banner,Images.banner];
  return (
    <div className='pt-32 flex items-center justify-center' style={{width:'70rem',}}>
    <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoHeight= {false}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        rewind={true}
        navigation
        effect= 'fade'
        fadeEffect= {{ crossFade: true }}
        >
        {images.map((s, i)=> (
        <SwiperSlide key={i}>
        <Link to='/'>
            <img src={s} className='w-full' /> 
        </Link>
        </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default Carosual
