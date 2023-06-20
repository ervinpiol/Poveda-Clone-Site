import React from "react";
import { motion } from "framer-motion";

export const Card = ({ h2Text, pText, isNarrow }) => {
  return (
    <div className="bg-LightGreen">
      <motion.div
        className="w-full xl:w-[1240px] mx-auto flex flex-col items-center py-16 lg:pt-32 lg:pb-36 px-4 sm:px-8 xl:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <h2 className="pb-5 text-center text-MediumGreenishGray h2-style">
          {h2Text}
        </h2>
        <p
          className={`p-style text-MediumGreenishGray text-center w-full ${
            isNarrow ? "lg:w-[47%]" : "lg:w-2/3"
          }`}
        >
          {pText}
        </p>
      </motion.div>
    </div>
  );
};
