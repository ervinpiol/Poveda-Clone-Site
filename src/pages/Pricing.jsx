import React from "react";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import WeOffer from "../components/WeOffer";
import Hero from "../components/Hero";
import PricingHeroImg from "../assets/Pricing/Pricing-Hero-Img.png";

const Pricing = () => {
  return (
    <div>
      <Hero image={PricingHeroImg} h1Text="CHOOSE BALI" />
      <WeOffer />
      <ContactForm pText="Bali is an amazing place to find exactly what you are looking for, be it relief from stress, an exciting adventure or an immersive culture. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet." />
      <Testimonials isPricing />
    </div>
  );
};

export default Pricing;
