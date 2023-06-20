import React from "react";
import { motion } from "framer-motion";

const Form = () => {
  return (
    <motion.form
      className="flex flex-col w-full gap-5 lg:w-1/2 font-Poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay: 0.4 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="input-style"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Last name">Last name*</label>
        <input
          type="text"
          id="Last name"
          placeholder="Your last name"
          className="input-style"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Last name">Last email*</label>
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          className="input-style"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="Enter your message"
          className="p-4 text-black opacity-50 resize-none hover:opacity-100 placeholder:font-light"
        ></textarea>
      </div>
      <button className="w-40 py-1.5 white-button-style">SUBMIT</button>
    </motion.form>
  );
};

export default Form;
