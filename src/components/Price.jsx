import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Price = ({ i, h3Text, pText, price, button, isGreen, link }) => {
  return (
    <div
      className={`py-16 lg:pt-32 lg:pb-36 px-4 sm:px-8 xl:px-0 ${
        isGreen
          ? "bg-Green"
          : i % 2 === 0
          ? "bg-Green text-white"
          : "bg-LightGreen text-MediumGreenishGray"
      }`}
    >
      <div className="w-full xl:w-[1240px] mx-auto flex justify-between flex-col md:flex-row items-start md:items-center">
        <motion.div
          className="w-full md:w-3/5 lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <h3 className="h3-style">{h3Text}</h3>
          <p className="pb-4 p-style">{pText}</p>
          {i !== 3 && (
            <Link to={link}>
              <button
                className={`py-1.5 ${
                  isGreen
                    ? "white-button-style"
                    : i % 2 === 0
                    ? "white-button-style"
                    : "green-button-style"
                }`}
              >
                {button}
              </button>
            </Link>
          )}
        </motion.div>
        <motion.div
          className="flex flex-col lg:items-center lg:gap-5 lg:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <span className="pt-12 text-2xl md:pt-0 lg:pt-10 font-JacquesFrancois">
            FROM
          </span>
          <h1 className="h1-style">{price}</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Price;
