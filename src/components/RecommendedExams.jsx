import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ExamIcons from '../assets/examIcons/ExamIcons';
import ExamCard from './cards/ExamCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const RecommendedExams = () => {
  const images = [
    {icon: ExamIcons.nta,
     exam_name:'JEE Mains 2024',
     board:'National Testing Agency',
     applied_people:'20 Lakhs',
     exam_fee:1200,
     tags:['Engineering','IIT','PCM']
    },
    {
      icon:ExamIcons.ssc,
      exam_name:'Civil Services 2024',
      board:'Union Public Service Commission',
      applied_people:'15 Lakhs',
      exam_fee:1500,
      tags:['Engineering','PCM']
    },
    {
      icon:ExamIcons.upsc,
      exam_name:'SSC CGL 2024',
      board:'Staff Selection Commission',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      tags:['Engineering','PCM']
    },
    {
      icon:ExamIcons.rrb,
      exam_name:'IBPS RRB 2024',
      board:'Railway Recruitment Board',
      applied_people:'7 Lakhs',
      exam_fee:850,
      tags:['Engineering','Degree','PCM']
    },
    {
      icon:ExamIcons.nta,
      exam_name:'NEET 2023',
      board:'National Testing Agency',
      applied_people:'16 Lakhs',
      exam_fee:1700,
      tags:['MBBS','AIMS']
    }
  ];
  return (
    <div className='pt-8 flex flex-col items-center justify-center' style={{width:'70rem',}}> 
      <div className='mx-5 p-4 flex justify-between items-center w-full'>
        <h1 className='text-2xl font-bold'>Recommended Exams</h1>
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
          style={{width:'70rem'}}
        >
          <div className='overflow-hidden'>
            {images.map((s, i)=> (
            <SwiperSlide key={i} className='mx-5 max-w-xs max-h-max p-3 border border-gray-400 rounded-md  bg-white'>
              <ExamCard s={s} />
            </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
  )
}

export default RecommendedExams
