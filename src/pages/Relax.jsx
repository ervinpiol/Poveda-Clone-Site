import React from "react";
import Hero from "../components/Hero";
import { Card } from "../components/Card";
import GridCard from "../components/GridCard";
import { relaxData } from "../data/relaxData";
import Price from "../components/Price";
import ContactForm from "../components/ContactForm";
import RelaxHeroImg from "../assets/HeroImages/relax-hero-img.webp";

const Relax = () => {
  return (
    <div>
      <Hero image={RelaxHeroImg} h1Text="RELAX IN BALI" />
      <Card
        h2Text="FORGET YOUR WORRIES"
        pText="Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries."
        isNarrow
      />
      <GridCard data={relaxData} />
      <Price
        h3Text="RELAX IN BALI"
        pText="Amazing, all-inclusive resorts, beautiful beaches and mindfulness sessions - these are just a few of the things that will help you relax and enjoy your holiday."
        button="PRICING"
        price="$420"
        isGreen
      />
      <ContactForm pText="Bali is an amazing place to find a relief from everyday stress. Beautiful resorts, amazing beaches and a special attention to the practice of mindfulness. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet." />
    </div>
  );
};

export default Relax;
