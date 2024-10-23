import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/animations";
import { MotionButton } from "../components";
import { heroImage } from "../constants";

const Hero = () => {
  return (
    <section id="Home" className="grid max-container">
      <div className="absolute top-[70px] sm:top-20 md:top-36 lg:top-40 space-y-1 sm:space-y-2 lg:space-y-4 text-left ml-4 sm:ml-12 md:ml-24 xl:ml-40 sm:mt-12 xl:mt-24 z-10">
        <motion.h1
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className=" text-xl sm:text-3xl md:text-5xl lg:text-7xl  xl:text-8xl font-bold "
        >
          Effortless
        </motion.h1>
        <motion.h1
          variants={SlideUp(0.8)}
          initial="hidden"
          whileInView="show"
          className="text-xl sm:text-3xl md:text-5xl lg:text-7xl  xl:text-8xl font-bold"
        >
          Job
        </motion.h1>
        <motion.h1
          variants={SlideUp(1.2)}
          initial="hidden"
          whileInView="show"
          className="text-xl sm:text-3xl md:text-5xl lg:text-7xl  xl:text-8xl font-bold"
        >
          Tracking
        </motion.h1>
        <motion.p
          variants={SlideUp(1.5)}
          initial="hidden"
          whileInView="show"
          className="text-xs md:text-base"
        >
          Track, organize, and succeed in your job search.
        </motion.p>

        <div className=" md:justify-start">
          <MotionButton
            variants={SlideUp(2)}
            initial="hidden"
            whileInView="show"
            className="bg-medium-green px-4 py-2 text-white cursor-pointer"
          >
            <FaCircleArrowRight size={24} />
            Sign Up
          </MotionButton>
        </div>
      </div>
      <div className="bg-cover bg-center relative">
        <img src={heroImage} alt="" className={`h-full w-full opacity-60`} />
      </div>
    </section>
  );
};

export default Hero;
