import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/animations";
import { MotionButton } from "../components";

const Hero = () => {
  return (
    <div>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* text content */}
          <div className="space-y-4  text-left ml-4 md:ml-24 xl:ml-32 mt-8 md:mt-24">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl  xl:text-8xl font-bold "
            >
              Effortless
              <img
                src={""}
                className="absolute w-[50px] md:w-[80px] top-0 md:top-[10px] right-[140px] md:right-[160px]"
              />
            </motion.h1>
            <motion.h1
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl  xl:text-8xl font-bold"
            >
              Job
            </motion.h1>
            <motion.h1
              variants={SlideUp(1.2)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl  xl:text-8xl font-bold"
            >
              Tracking
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm md:text-base"
            >
              Track, organize, and succeed in your job search.
            </motion.p>

            {/* Button */}
            <div className=" md:justify-start !mt-10">
              <MotionButton variants={SlideUp(2)}
                initial="hidden"
                whileInView="show"
                className="bg-medium-green px-4 py-2 text-white cursor-pointer">
              <FaCircleArrowRight size={24}/>
              Sign Up
              </MotionButton>
            </div>
          </div>
          
        </div>
      </div>

      {/* Background green */}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className="w-[2500px] h-[2500px] rounded-3xl bg-dark-green absolute  top-[-45%] md:top-[-20%] left-[70%] z-0"
      ></motion.div>
    </div>
  );
};

export default Hero;
