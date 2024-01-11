/* eslint-disable react/prop-types */
import { FaRegBookmark } from "react-icons/fa"
import { MdShare } from "react-icons/md";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom"

const ExamInfoCard = ({ keyval , data }) => {
  return (
    <div key={keyval} className="border-2 p-4 rounded-xl shadow-lg " style={{width:'35rem'}}>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <img
            src={data.icon}
            className="w-11 border border-gray-400 opacity-7 rounded-xl"
            alt={data.exam_name}
          />
          <div>
            <h1 className="text-center text-md font-bold capitalize">
              {data.exam_name}
            </h1>
            <p className="text-center text-xs text-blue-500 font-medium">
              {data.board}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link to="/">
            <FaRegBookmark className="scale-150 text-blue-500" />
          </Link>
          <Link to="/">
            <MdShare className="scale-150" />
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex gap-2 items-center text-xs">
          <CalendarMonthIcon className="text-blue-500 " />
          <h1 className="font-bold">Exam Date : {data.exam_date}</h1>
        </div>
        <div className="flex gap-2 items-center text-xs">
          <GroupsIcon className="text-blue-500 " />
          <h1 className="font-bold">Applicants : {data.applied_people}+</h1>
        </div>
      </div>
      <hr />
      <div className="flex justify-between my-4 items-center">
        <h1 className="opacity-50 font-bold">Posted 30 days ago, ends on 31 dec</h1>
        <Link to='/'><button className="bg-blue-600 rounded-full text-white font-medium px-4 py-3 text-xs">Apply Now</button></Link>
      </div>
    </div>
  );
}

export default ExamInfoCard
