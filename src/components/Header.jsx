import DesktopHeader from "./header/DesktopHeader";
import MobileHeader from "./header/MobileHeader";
import { useState } from "react";
import { FaBars } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import Search from "./Search";
import Images from "../assets/Image/Image";
import { TbBell } from "react-icons/tb";

const Header = () => {
    const [active,Setactive] = useState(false);

    const showNavbar = () => {
        Setactive(!active);
    }
  return (
    <>
    <header className='bg-white text-black fixed w-full z-10 border-b-2'>
      <nav className='flex items-center justify-evenly p-3'>
        <Link to='/'><img className="max-w-48" src={Images.logo} alt="Form Ease Logo" /></Link>
        <DesktopHeader />
        <Search />
        <div className='md:hidden'>
          <FaBars className='scale-150 text-black' onClick={ showNavbar }/>
          <MobileHeader showNavbar={showNavbar} active={active}/>
        </div>
        <Link to='/'> <TbBell className='scale-150 text-blue-500'/></Link>
        <Link to='/'><img className="w-10 rounded-full" src="https://avatars.githubusercontent.com/u/86186443?v=4" alt="" /></Link>
      </nav>
    </header>
    </>
  )
}

export default Header