import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Visit from "../pages/Visit";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Adventure from "../pages/Adventure";
import Culture from "../pages/Culture";
import Relax from "../pages/Relax";

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/relax" element={<Relax />} />
    </Routes>
  );
};

export default AnimatedRoutes;
