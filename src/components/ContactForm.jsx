import React from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const ContactForm = ({ isContact, pText }) => {
  return (
    <div className="px-4 py-20 sm:px-8 lg:pb-20 bg-DarkGreenishGray lg:pt-28 xl:px-0">
      <div className="w-full xl:w-[1240px] mx-auto flex justify-between flex-col lg:flex-row">
        {isContact ? (
          <div className="flex flex-col gap-12 lg:gap-16 pb-14 lg:pb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h3 className="h3-style">HEADQUARTERS</h3>
              <p className="w-full leading-7 lg:w-3/5 font-Poppins">
                H3VR+RFH, Sangketan, Penebel, Tabanan Regency, Bali 82152,
                Indonesia
              </p>
            </motion.div>
            <motion.div
              className="font-Poppins"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h3 className="h3-style">CONTACTS</h3>
              <p className="leading-7">email@example.com</p>
              <p className="pb-2.5 leading-7 lg:pb-8">123-456-7890</p>
              <div className="flex gap-4 text-xl">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="w-full lg:w-1/2">
            <motion.div
              className="w-full lg:pt-16 lg:w-4/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h2 className="pb-5 h2-style">CONTACT US</h2>
              <p className="pb-12 p-style lg:pb-0">{pText}</p>
            </motion.div>
          </div>
        )}
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
