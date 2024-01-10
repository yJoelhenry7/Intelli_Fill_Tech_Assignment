/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FaRegBookmark } from "react-icons/fa";
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { IoIosArrowForward } from "react-icons/io";

const ExamCard = ({s}) => {
  return (
    <>
    <div className="flex items-center justify-between mb-2">
        <img src={s.icon} className='w-14 border border-gray-400 opacity-7 rounded-xl' />
        <div className="flex flex-col items-center justify-center">
            <h1 className='text-center font-bold capitalize'>{s.exam_name}</h1>
            <p className="text-center text-sm opacity-50">{s.board}</p>
        </div>
        <Link to='/'><FaRegBookmark className='scale-150 text-blue-500' /></Link>
    </div>
    <hr />
    <div className="flex flex-col items-center justify-start text-sm">
        <div className="flex items-center justify-start gap-2 text-sm w-40">
            <GroupsIcon style={{fontSize:'2rem'}} />
            <span>More than {s.applied_people}</span>
        </div>
        <div className="flex items-center justify-start gap-2 text-sm w-40">
            <AccountBalanceWalletIcon style={{fontSize:'1.8rem'}} />
            <span>&#8377;{s.exam_fee}</span>
        </div>
        <div className="flex items-center justify-start gap-2 text-sm w-40">
            {s.tags.map((tag,i)=>(
            <span className="mx-0 my-2 border-2 border-gray-300 p-2 text-xs rounded-xl" key={i}>{tag}</span>
            ))}
        </div>
        <div className="flex items-center justify-start gap-2 text-sm w-40">
        <Link to='/' className="text-blue-500 flex items-center">view details <IoIosArrowForward className='scale-100'/></Link>
        </div>
    </div>
    </>
  )
}

export default ExamCard
