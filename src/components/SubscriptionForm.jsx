import React from "react";
import { motion } from "framer-motion";

const SubscriptionForm = () => {
  return (
    <div className="px-4 py-20 sm:px-8 bg-MediumGreenishGray xl:px-0 lg:py-28">
      <div className="w-full md:w-3/5 lg:w-full xl:w-[1240px] mx-auto flex justify-between flex-col lg:flex-row gap-12">
        <motion.div
          className="w-full lg:w-[31%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <h2 className="pb-4 h2-style">SUBSCRIBE</h2>
          <p className="p-style">
            Subscribe to our newsletter to always be the first to hear about
            recent news, offers and adventures in Bali.
          </p>
        </motion.div>
        <motion.form
          className="flex flex-col items-start w-full lg:w-1/2 font-Poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <label htmlFor="email" className="pb-1">
            Email address*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="input-style"
          />
          <button className="py-1.5 mt-6 white-button-style">SUBMIT</button>
        </motion.form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
