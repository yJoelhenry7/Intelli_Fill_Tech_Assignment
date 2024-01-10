/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MobileHeader = ({ showNavbar, active }) => {
  return (
    <>
    <div className='md:hidden absolute right-1 z-10 p-4 text-black'>
       <ul className = {active ? 'text-xl  flex-col flex items-center fixed inset-0 justify-center left-1/3 gap-8 p-8 bg-black/60 backdrop-blur-md md:hidden': "hidden"}>
          <FaXmark className='scale-150' onClick={ showNavbar } />
          <li><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/Result' >Result</NavLink></li>
          <li><NavLink to='/FAQ'>FAQ</NavLink></li>
          <li><NavLink to='/Aboutus'>About Us</NavLink></li>
          <li><NavLink to='/Contactus'>Contact Us</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default MobileHeader