import { useEffect, useState } from "react";
import homeImage from "../assets/image/home-icon-silhouette-svgrepo-com.svg"

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            
            if (currentScroll <= 100) {
                setShow(true);
            } else if (currentScroll < lastScroll) {
                setShow(true);
            } else {
                setShow(false);
            }
            
            setLastScroll(currentScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    return (
<nav className={`bg-white border-b border-gray-200 fixed w-full z-20 start-0 transition-transform duration-300 shadow-sm ${show ? 'translate-y-0' : '-translate-y-full'}`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={homeImage} className="h-7" alt="Logo" />
        <span className="self-center text-xl text-gray-900 font-semibold whitespace-nowrap">OFFSET PRINTING</span>
    </a>
    <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        type="button" 
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${mobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        <li>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0 transition-colors">Services</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0 transition-colors">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar