import { Link } from 'react-router-dom';
import { RecommendedExamsData } from './Data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ExamSlider from './ExamSlider';

const RecommendedExams = () => {

  return (
    <div className='pt-8 flex flex-col items-center justify-center' style={{width:'70rem',}}> 
      <div className='mx-5 p-4 flex justify-between items-center w-full'>
        <h1 className='text-2xl font-bold'>Recommended Exams</h1>
        <Link to='/' className='text-blue-500 font-bold'>See All</Link>
      </div>
      <ExamSlider Examdata={RecommendedExamsData} ExamMode={'RecommendedExams'}/>
      </div>
  )
}

export default RecommendedExams
