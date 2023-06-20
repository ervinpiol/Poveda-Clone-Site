import React from "react";
import { Card } from "../components/Card";
import Live from "../components/Live";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import VisitHeroImg from "../assets/Visit/Visit-Hero-Img.png";

const Visit = () => {
  return (
    <div>
      <Hero image={VisitHeroImg} h1Text="VISIT BALI" />
      <Card
        h2Text="LET US ORGANIZE YOUR TRIP"
        pText="Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries."
      />
      <Live isVisit />
      <ContactForm pText="Bali is an amazing place to find exactly what you are looking for, be it relief from stress or an immersive culture. We can help you organize a memorable stay at one of the most magical places on the planet." />
    </div>
  );
};

export default Visit;
