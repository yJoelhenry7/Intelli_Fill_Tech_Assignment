import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { RecentExamsData } from './Data';
import { RecentExamTags } from './Data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ExamSlider from './ExamSlider';

const RecentExams = () => {
   return (
    <div className='pt-8 flex flex-col items-center justify-center' style={{width:'70rem',}}> 
      <div className='mx-5 p-4 flex justify-between items-center w-full'>
        <h1 className='text-2xl font-bold'>Recent Exams</h1>
        <Link to='/' className='text-blue-500 font-bold'>See All</Link>
      </div>
        <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            autoHeight= {true}
            spaceBetween={10}
            slidesPerView={3}
            rewind={true}
            effect= 'fade'
            fadeEffect= {{ crossFade: true }}
            style={{width:'70rem',height:'5rem', display:'flex'}}
          >
            <div className='overflow-hidden'>
              {RecentExamTags.map((tag, i)=> (
              <SwiperSlide key={i} className='swiperr-slide mx-5 max-w-sm border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white rounded-full  bg-white'>
                 {tag=='ALL' ? (<span className='text-xs bg-blue-600 text-white rounded-full p-2 cursor-pointer'>{tag}</span>) : (<span className='text-xs  p-2 cursor-pointer'>{tag}</span>)}
              </SwiperSlide>
              ))}
            </div>
          </Swiper>
      <ExamSlider Examdata={RecentExamsData} ExamMode={'RecentExams'}/>
      </div>
  )
}

export default RecentExams
