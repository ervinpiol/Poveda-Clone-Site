import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FooterLogo from "../assets/Poveda-Logo-Green.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-LightGreen">
      <div className="w-full xl:w-[1240px] mx-auto flex justify-between items-start px-4 sm:px-8 xl:px-0 py-20 p-style flex-col sm:flex-row">
        <motion.img
          src={FooterLogo}
          alt="FooterLogo"
          className="pb-8 w-44 lg:w-auto lg:pb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        />
        <div className="flex flex-col gap-8 sm:gap-24 md:gap-32 xl:gap-64 xl:pr-40 text-MediumGreenishGray sm:flex-row">
          <motion.ul
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {["About Us", "Visit", "Pricing", "Contact"].map((list, i) => (
              <li key={i} className="underline">
                <Link to={`/${list.toLowerCase().replace(/\s+/g, "-")}`}>
                  {list}
                </Link>
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <p>email@example.com</p>
            <p className="pb-3">123-456-7890</p>
            <div className="flex gap-5 text-xl text-DarkGreenishGray">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
