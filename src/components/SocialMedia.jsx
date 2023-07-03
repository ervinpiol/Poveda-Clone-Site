import React from "react";
import Img1 from "../assets/Home/SocialMedia/img1.webp";
import Img2 from "../assets/Home/SocialMedia/img2.webp";
import Img3 from "../assets/Home/SocialMedia/img3.webp";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-20 lg:pb-24 lg:pt-28 bg-VeryLightGreen md:px-10 xl:px-0">
      <motion.h2
        className="pb-12 text-center lg:pb-20 text-MediumGreenishGray h2-style"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        FOLLOW US ON INSTAGRAM
      </motion.h2>
      <div className="flex flex-col justify-center gap-6 pb-12 md:flex-row">
        {[Img1, Img2, Img3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="IMG"
            className="md:w-[32%] xl:w-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3 * (i + 1), duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          />
        ))}
      </div>
      <motion.button
        className="green-button-style py-1.5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        @POVEDA_TRAVEL
      </motion.button>
    </div>
  );
};

export default SocialMedia;
