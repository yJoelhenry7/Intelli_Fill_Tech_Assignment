import { Link, useLocation, useParams } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import ExamDetailCard from "./cards/ExamDetailCard";

const DetailsContainer = () => {
    let { mode } = useParams();
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');

  return (
    <div className="pt-32">
        <div className="flex gap-4 items-center">
            <Link to='/'><GoArrowLeft className='scale-150'/></Link>
            <Link to='/' className="text-lg font-bold">Back</Link>
        </div>
        <div className="flex justify-between gap-4">
            <div className="basis-1/2">
               <ExamDetailCard mode={mode} id={id}/>
            </div>
            <div className="basis-1/2">
               <ExamDetailCard mode={mode} id={id}/>
            </div>
        </div>
      
    </div>
  )
}

export default DetailsContainer

// {
//     mode == 'RecommendedExams' ? 
//     RecommendedExamsData.map((data,i)=>(
//         <h1 key={i}>{ data.exam_name }</h1>
//     )) : 
//     ( <h1>No Data is present</h1>)
//     }