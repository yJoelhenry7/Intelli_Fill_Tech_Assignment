import { Link } from "react-router-dom"
import Images from "../assets/Image/Image"
import { FaFacebook ,FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
<footer className="bg-white dark:bg-gray-900 border-t mt-2" style={{boxShadow:'rgba(0, 0, 0, 0.09) 0px 2px 4px 0px inset'}}>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                  <img src={Images.logo} className="h-14 me-3" alt="Form Ease Logo" />
              </Link>
              <div className="flex gap-6 m-4 text-gray-500">
                <Link to="/" className="flex items-center">
                    <FaFacebook className='scale-150' />
                </Link>
                <Link to="/" className="flex items-center">
                    <FaInstagram className='scale-150' />
                </Link>
                <Link to="/" className="flex items-center">
                    <FaXTwitter className='scale-150'  />
                </Link>
                <Link to="/" className="flex items-center">
                    <FaLinkedin className='scale-150'  />
                </Link>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">aboutus</Link>
                      </li>
                      <li  className="mb-2">
                          <Link to="/" className="hover:underline">sitemap</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Credits</Link>
                      </li>
                      <li  className="mb-2">
                          <Link to="/" className="hover:underline">Help Center</Link>
                      </li>
                      <li  className="mb-2">
                          <Link to="/" className="hover:underline">Community Guidelines</Link>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <Link to="/" className="hover:underline ">Accessibility</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Mobile</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline ">Marketing</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Advertising</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Report Issue</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Terms &amp; Safety</Link>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="mb-6 md:mb-0 flex justify-center flex-col flex-wrap sm:flex-row">
             <Link to="/" className="flex items-center justify-center">
                  <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className="h-20 me-3" alt="Get it in on Googleplay Button" />
              </Link>
              <Link to="/" className="flex items-center justify-center">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Download_on_the_App_Store_Badge_US-UK_RGB_wht.svg/1280px-Download_on_the_App_Store_Badge_US-UK_RGB_wht.svg.png' className="h-14 me-3" alt="Download on the App Store" />
              </Link>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-start flex-col ">
          <span className="text-xs text-gray-500  dark:text-gray-400">All trademarks are the property of their respective owner</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">All rights are reserved &copy; 2024 intellFill Tech Pvt.Ltd</span>
      </div>
    </div>
</footer>

  )
}

export default Footer
