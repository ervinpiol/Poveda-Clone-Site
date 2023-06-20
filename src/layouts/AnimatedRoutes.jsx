import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Visit = lazy(() => import("../pages/Visit"));
const Contact = lazy(() => import("../pages/Contact"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Adventure = lazy(() => import("../pages/Adventure"));
const Culture = lazy(() => import("../pages/Culture"));
const Relax = lazy(() => import("../pages/Relax"));

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Suspense>
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
    </Suspense>
  );
};

export default AnimatedRoutes;
