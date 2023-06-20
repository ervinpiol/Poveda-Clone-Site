import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = ({ image, h1Text, isAdventure, homeHero }) => {
  return (
    <div
      className={`relative ${
        homeHero
          ? "h-[600px] lg:h-[838px]"
          : "h-[370px] sm:h-[475px] lg:h-[645px]"
      }`}
    >
      <img src={image} alt="HeroImg" className="object-cover w-full h-full" />
      <div className="w-full xl:w-[1240px] left-1/2 -translate-x-1/2 absolute z-[2] bottom-16 sm:bottom-24 lg:bottom-40 px-4 sm:px-8 xl:px-0">
        <div>
          <motion.div
            className={`${homeHero && "w-full xl:w-3/5"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <h2 className="lg:pb-6 h2-style">
              {isAdventure ? "IT'S TIME FOR" : "IT'S TIME TO"}
            </h2>
            <h1 className="h1-style">{h1Text}</h1>
            {homeHero && (
              <>
                <p className="w-full pb-6 text-lg font-medium leading-relaxed sm:w-4/5 md:w-3/5 xl:w-4/5 font-Poppins">
                  Crave new adventures, mystical experiences and relaxing
                  beaches? You need to visit Bali. We make sure that you’ll get
                  an experience you'll never forget.
                </p>
                <Link to="/pricing">
                  <button className="py-1.5 lg:py-5 white-button-style hover:text-black hover:bg-white">
                    OUR OFFERS
                  </button>
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
