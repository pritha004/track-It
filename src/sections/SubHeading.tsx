import { motion } from "framer-motion";
import { SlideUp } from "../utils/animations";
import { penImage, plannerImage } from "../constants";

const SubHeading = () => {
  return (
    <section className="grid max-container">
      <div className="flex gap-4 md:gap-12 lg:gap-24 place-items-center justify-between">
        <div className="w-1/2 xl:w-1/2 pl-8">
          <motion.p variants={SlideUp(0.5)} initial="hidden" whileInView="show" className="py-2 lg:py-8 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
          Streamline
          </motion.p>
          <motion.p variants={SlideUp(0.7)} initial="hidden" whileInView="show" className="py-2 lg:py-8 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
          Your Job Hunt
          </motion.p>
          <motion.p variants={SlideUp(0.9)} initial="hidden" whileInView="show" className="py-2 lg:py-8 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
          With Ease.
          </motion.p>
         
        </div>

        <div className="w-1/2 xl:w-2/3">
          <div className="relative flex justify-end items-center">
            <motion.img
              initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 1 }}
              src={plannerImage}
              className="w-[200px] sm:w-[600px] md:w-[700px] lg:w-[900px] img-shadow"
            />
            {/* {/* <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Spoon}
              className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
            /> */}
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 100, x: -200, y: 120 }}
              transition={{ duration: 0.8 }}
              src={penImage}
              className="w-[180px] sm:w-[220px] absolute top-[-40px] sm:top-[70px] right-[-120px] sm:right-[10px] img-shadow"
            /> 
            {/* TODO: md, lg, xl */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeading;
