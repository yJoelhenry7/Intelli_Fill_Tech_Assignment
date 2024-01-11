/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { RecentExamsData, RecommendedExamsData } from "../Data"
import ExamRelatedCardInfo from "./ExamRelatedCardInfo"


const ExamRelatedCard = ({mode, id}) => {
  return (
    <div className="border-2 p-4 rounded-xl shadow-lg " style={{width:'35rem'}}>
       <h1 className="text-xl font-bold ">Exams you might be Intrested in </h1>
       <div className="mt-4">
            {
            mode == 'RecommendedExams' ? 
            RecommendedExamsData.filter((data)=> data.id != id).map((data,i)=>(
              <ExamRelatedCardInfo key={i} data={data} mode={mode} />
            )) :   mode == 'RecentExams' ? 
            RecentExamsData.filter((data)=> data.id != id).map((data,i)=>(
              <ExamRelatedCardInfo key={i} data={data} mode={mode} />
            )) :
            ( <h1>No Data is present</h1>) 
        }
       </div>
       <div className="flex items-center justify-center">
        <Link to='/' className="border-2 border-blue-600 py-2 px-4 rounded-full"><button className="text-blue-500 font-bold text-sm">View All</button></Link>
       </div>
    </div>
  )
}

export default ExamRelatedCard
