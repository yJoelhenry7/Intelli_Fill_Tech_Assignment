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

const RecentExams = () => {
  const images = [
    {icon: ExamIcons.vit,
     exam_name:'VITEEE 2024',
     board:'Vellore Institute of Technology',
     applied_people:'10 Lakhs',
     exam_fee:1500,
     tags:['Engineering','PCM']
    },
    {
      icon:ExamIcons.srm,
      exam_name:'SRMJEE 2024',
      board:'SRMIST',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      tags:['Engineering','PCM']
    },
    {
      icon:ExamIcons.tsemacet,
      exam_name:'TS EAMCT 2024',
      board:'TSCHE',
      applied_people:'10 Lakhs',
      exam_fee:1000,
      tags:['Engineering','PCM']
    },
    {
      icon:ExamIcons.osmania,
      exam_name:'OUCET',
      board:'Osmania University',
      applied_people:'7 Lakhs',
      exam_fee:800,
      tags:['Engineering','Degree','PCM']
    },
    {
      icon:ExamIcons.au,
      exam_name:'AUEET 2024',
      board:'Andhra University',
      applied_people:'5 Lakhs',
      exam_fee:600,
      tags:['Engineering','Degree','PCM']
    }
  ];
  const recentExamTags =['ALL', 'GATE', 'AP EAPCET', 'BITSAT', 'JEE MAINS', 'JEE Advanced', 'TS EAMCET', 'Amity JEE', 'NEET', 'VITEEE', 'WBJEE', 'KCET', 'SRMJEEE', 'COMEDK', 'MHT CET', 'UPSEE', 'TANCET', 'KIITEE', 'GUJCET', 'Karnataka PGCET', 'OJEE', 'BVP CET', 'LPUNEST', 'SAAT', 'KIIT Entrance Exam', 'CUCET', 'AIIMS', 'AFMC', 'JIPMER', 'CMC Vellore', 'MANIPAL MET', 'IISER', 'NATA', 'CEED'];
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
              {recentExamTags.map((tag, i)=> (
              <SwiperSlide key={i} style={{}} className='swiperr-slide mx-5 max-w-sm border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white rounded-full  bg-white'>
                 {tag=='ALL' ? (<span className='text-xs bg-blue-600 text-white rounded-full p-2 cursor-pointer'>{tag}</span>) : (<span className='text-xs  p-2 cursor-pointer'>{tag}</span>)}
                
              </SwiperSlide>
              ))}
            </div>
          </Swiper>
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

export default RecentExams
