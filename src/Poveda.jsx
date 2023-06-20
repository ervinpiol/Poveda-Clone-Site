import React from "react";
import Navbar from "./layouts/Navbar";
import AnimatedRoutes from "./layouts/AnimatedRoutes";
import Footer from "./layouts/Footer";

const Poveda = () => {
  return (
    <div className="relative text-white">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default Poveda;
