/* eslint-disable react/prop-types */

import { RecentExamsData, RecommendedExamsData } from "../Data"

import ExamInfoCard from "./ExamInfoCard";


const ExamDetailCard = ({ mode, id}) => {
  return (
    <div>
    {
        mode == 'RecommendedExams' ? 
        RecommendedExamsData.filter((data)=> data.id == id).map((data,i)=>(
          <ExamInfoCard key={i} data={data} />
        )) :   mode == 'RecentExams' ? 
        RecentExamsData.filter((data)=> data.id == id).map((data,i)=>(
          <ExamInfoCard key={i} data={data} />
        )) :
        ( <h1>No Data is present</h1>) 
    }
    </div>
  )
}

export default ExamDetailCard
