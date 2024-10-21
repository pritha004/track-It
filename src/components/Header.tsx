import { IoCartOutline } from 'react-icons/io5';
import { motion} from "framer-motion";
import { navLinks } from '../constants';

const SlideDown = (delay:number)=>{
    return {
        initial:{
            y: -100,
            opacity: 0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                delay: delay
            }
        }
    }
}
const Header = () => {
  return (
    <header
    className={`px-8 py-6 z-10 w-full text-black bg-white/60
       
      fixed`}
  >
    <nav className="flex justify-between items-center max-container">
        <div className='container flex justify-between items-center font-palanquin'>
            {/* logo section */}
            <motion.img
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}

            src={""} alt='Logo' className='w-36'/>

            {/* menu section */}
            <div className='hidden md:block'>
                <ul className='flex gap-6'>
                    {
                        navLinks.map((menu)=>{
                            return(
                                <motion.li
                                variants={SlideDown(menu.delay)}
                                initial="initial"
                                animate="animate"
                                key={menu.id} className='nav-menu' data-delay={menu.delay}>
                                    <a href={menu.path} className='inline-block px-2 py-2 text-2xl'>
                                        {menu.title}
                                    </a>
                                </motion.li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* button section */}
            <motion.button variants={SlideDown(1)}
                                initial="initial"
                                animate="animate" className='h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark'>
                <IoCartOutline/>
            </motion.button>
        </div>
    </nav>
    </header>
  )
}

export default Header