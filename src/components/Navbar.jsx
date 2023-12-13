import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 mt-0 fixed p-2 z-50 w-full justify-center items-center">
      <div className="mx-auto ">
        <div className="flex h-20 justify-center">
          <div className="flex py-6 justify-center items-center px-5 md:mr-20 mr-10">
              <a className="cursor-pointer"
                 href="/"
              >
                <img src="/src/assets/logo1.png" alt="Logo" className="h-10 w-24 mr-10 " />
              </a>
            <ul className="hidden lg:flex space-x-6 px-auto lg:space-x-10">
              <li>
                <a
                  className="hover:border-b-4 pb-[18px] text-[#f0eef6] font-bold hover:border-b-pink-500 hover:text-pink-500 "
                  href="/"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-4 pb-[18px] text-[#f0eef6] font-bold hover:border-b-pink-500 hover:text-pink-500"
                  href="/imprimerie"
                >
                  imprimerie
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-4 pb-[18px] text-[#f0eef6] font-bold hover:border-b-pink-500 hover:text-pink-500"
                  href="/sérigraphie"
                >
                  Sérigraphie
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-4 pb-[18px] text-[#f0eef6] font-bold hover:border-b-pink-500 hover:text-pink-500"
                  href="/Signalisation"
                >
                  Signalétique
                </a>
              </li>
              <li className="bg-pink-500 text-white font-bold rounded-lg hover:text-pink-500 hover:bg-white">
                <a className="p-6" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="ml-10 inline-flex py-0 items-center justify-center p-1 rounded-md text-blue-900 hover:text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <FaTimes className=" block h-6 w-6" />
              ) : (
                <FaBars className=" block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } text-center w-full h-[120vh] bg-blue-900 mt-0 lg:hidden`}
        id="mobile-menu"
      >
        <ul className="text-[24px] py-10 space-y-12 text-white space-x-6">
          <li>
            <a
              className=" text-white hover:text-pink-500"
              href="/"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              className=" text-white hover:text-pink-500"
              href="/imprimerie"
            >
              imprimerie
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-pink-500"
              href="/sérigraphie"
            >
              Sérigraphie
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-pink-500"
              href="/signalisation"
            >
              Signalétique
            </a>
          </li>
          <li className="text-white hover:text-pink-500">
            <a className="p-6" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;