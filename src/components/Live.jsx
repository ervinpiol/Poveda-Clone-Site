import React from "react";
import { liveData } from "../data/liveData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Live = ({ isVisit }) => {
  return (
    <div
      className={`flex flex-col items-center gap-10 lg:gap-24 px-4 py-20 md:px-8 xl:px-0 lg:py-32 ${
        isVisit ? "bg-VeryLightGreen" : "bg-LightGreen"
      }`}
    >
      <motion.h2
        className="text-center h2-style text-DarkGreenishGray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        LICENCE TO LIVE
      </motion.h2>
      <div className="flex flex-col gap-12 md:gap-6 md:flex-row">
        {liveData.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 lg:gap-6">
            <motion.img
              src={item.image}
              alt={item.h4Text}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3 * (i + 1), duration: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            />
            <motion.div
              className="flex flex-col items-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ delay: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h4 className="font-JacquesFrancois text-2xl lg:text-[32px] text-MediumGreenishGray">
                {item.h4Text}
              </h4>
              <Link to={item.link}>
                <button className="green-button-style py-1.5 lg:py-3">
                  {item.button}
                </button>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;
