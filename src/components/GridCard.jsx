import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GridCard = ({ data, isReverse }) => {
  return (
    <div>
      {data.map((item, i) => (
        <div
          key={i}
          className={`px-4 sm:px-8 py-24 xl:py-0 xl:px-0 ${
            (i === 0 || i === 3) && !isReverse
              ? "bg-MediumGreenishGray"
              : i === 1 && isReverse
              ? "bg-MediumGreenishGray"
              : i === 1 && !isReverse
              ? "bg-VeryLightGreen text-MediumGreenishGray"
              : i === 2
              ? "bg-LightGreen text-MediumGreenishGray"
              : "bg-VeryLightGreen text-MediumGreenishGray"
          }`}
        >
          <div
            key={i}
            className={`w-full xl:w-[1240px] mx-auto flex items-center flex-col lg:flex-row lg:justify-between xl:justify-normal ${
              i % 2 === 1 && "lg:flex-row-reverse"
            }`}
          >
            <motion.img
              src={item.image}
              alt="IMG"
              className="w-full pb-5 lg:w-1/2 lg:pb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            />
            <motion.div
              className={`w-full lg:w-5/12 font-Poppins ${
                i % 2 === 0 ? " xl:pl-28" : "mr-auto"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h3 className={`h3-style ${i % 2 === 1 && "xl:w-1/2"}`}>
                {item.h3Text}
              </h3>
              {Array.isArray(item.pText) ? (
                item.pText.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`pb-6 p-style ${index === 0 ? "pb-6" : "pb-8"}`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="p-style">{item.pText}</p>
              )}

              {item.button && (
                <Link to={item.link}>
                  <button
                    className={`py-1.5 lg:py-3 ${
                      i % 2 === 0 ? "green-button-style" : "white-button-style "
                    }`}
                  >
                    {item.button}
                  </button>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
