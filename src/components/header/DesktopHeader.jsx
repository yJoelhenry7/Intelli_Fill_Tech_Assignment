import { NavLink } from "react-router-dom"


const DesktopHeader = () => {
  return (
    <>
        <ul className='hidden md:flex gap-4 items-center text-black'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Home</NavLink></li>
          <li><NavLink to='/Result' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Result</NavLink></li>
          <li><NavLink to='/FAQ' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>FAQ</NavLink></li>
          <li><NavLink to='/Aboutus'  className={({ isActive }) => isActive ? 'text-blue-600' : ''}>About Us</NavLink></li>
          <li><NavLink to='/Contactus' className={({ isActive }) => isActive ? 'text-blue-600' : ''}>Contact Us</NavLink></li>
        </ul>
    </>
  )
}

export default DesktopHeader