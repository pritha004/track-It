import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { SlideDown } from "../utils/animations";
import { RxLapTimer } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`px-8 py-6 z-10 w-full text-black bg-white/60 fixed`}>
      <nav className="flex justify-between items-center max-container">
        <div className="container flex justify-between items-center font-palanquin">
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

          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex gap-6">
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
            <button>
              
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
