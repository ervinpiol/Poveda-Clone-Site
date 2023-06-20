import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ isPricing }) => {
  return (
    <div
      className={`${
        isPricing ? "bg-MediumGreenishGray" : "bg-DarkGreenishGray"
      }`}
    >
      <motion.div
        className="flex flex-col items-center w-full gap-6 px-4 py-16 mx-auto sm:px-8 xl:w-1/2 lg:py-28 lg:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <h2 className="text-center h2-style">WHAT THEY SAY ABOUT US</h2>
        <p className="w-full text-center p-style lg:w-3/5">
          How can I begin to describe my time with Poveda... It was simply
          life-changing! I always imagined that Bali would be a breathtaking
          destination, but thanks to Poveda, I was able to not just experience
          the culture, but have once-in-a-lifetime memories. I got so much more
          than I ever anticipated from my holiday.
        </p>
        <p className="p-style">- Alice Bloomberg</p>
      </motion.div>
    </div>
  );
};

export default Testimonials;
