/* eslint-disable react/prop-types */
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { IoIosArrowForward } from "react-icons/io";

const ExamRelatedCardInfo = ({ key , data , mode }) => {
  return (
    <div key={key} className="my-4" style={{width:'35rem'}}>
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
      </div>
      <div className="my-4">
        <div className="flex gap-2 items-center text-xs">
          <GroupsIcon className='opacity-50' style={{fontSize:'1.5rem'}} />
          <h1 className="font-bold">More than {data.applied_people}</h1>
        </div>
        <div className="flex gap-2 items-center justify-between text-xs" style={{width:'30rem'}} >
          <div className='flex gap-2 items-center '>             
            <AccountBalanceWalletIcon className='opacity-50' style={{fontSize:'1.5rem'}} />
            <h1 className="font-bold">&#8377;{data.exam_fee}</h1>
          </div>
          <Link to={`/details/${mode}?id=${data.id}`} className='text-blue-500 font-bold flex items-center gap-2 justify-between'>View Details <IoIosArrowForward className='scale-150'/> </Link>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ExamRelatedCardInfo
