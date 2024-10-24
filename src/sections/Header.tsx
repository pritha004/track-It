import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { SlideDown, SlideRight } from "../utils/animations";
import { RxLapTimer } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={`z-20 px-8 py-4 w-full text-black bg-white fixed`}>
      <nav className="flex justify-between items-center max-container">
        
          {/* logo section */}
          <Link to="/">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <RxLapTimer size={32} />
            </motion.button>
          </Link>

          <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((menu) => {
                return (
                  <motion.li
                    variants={SlideDown(menu.delay)}
                    initial="initial"
                    animate="animate"
                    key={menu.id}
                    className="nav-menu"
                    data-delay={menu.delay}
                  >
                    <Link
                      to={menu.path}
                      className="inline-block px-2 py-2 text-2xl"
                    >
                      {menu.title}
                    </Link>
                  </motion.li>
                );
              })}
        </ul>
        <div className="flex items-center">
          <div className="hidden max-lg:flex max-lg:justify-around max-lg:px-4 max-lg:gap-4">
            {isOpen && (
              <ul className="flex flex-col px-2 text-right">
                {navLinks.map((menu) => {
                return (
                  <motion.li
                    variants={SlideRight(menu.delay)}
                    initial="initial"
                    animate="animate"
                    key={menu.id}
                    className="nav-menu"
                    data-delay={menu.delay}
                  >
                    <Link
                      to={menu.path}
                      className="inline-block px-2 py-[2px] text-lg"
                    >
                      {menu.title}
                    </Link>
                  </motion.li>
                );
              })}
              </ul>
            )}
            {isOpen ? (
              <RxCross2 className="mt-1" onClick={handleMenu} fontSize={25} />
            ) : (
              <GiHamburgerMenu onClick={handleMenu} fontSize={30} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
