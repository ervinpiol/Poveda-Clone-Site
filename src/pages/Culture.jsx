import React from "react";
import Hero from "../components/Hero";
import { Card } from "../components/Card";
import GridCard from "../components/GridCard";
import { cultureData } from "../data/cultureData";
import Price from "../components/Price";
import ContactForm from "../components/ContactForm";
import CultureHeroImg from "../assets/HeroImages/culture-hero-img.png";

const Culture = () => {
  return (
    <div>
      <Hero image={CultureHeroImg} h1Text="FEEL BALI" />
      <Card
        h2Text="DIVE INTO A LIFESTYLE"
        pText="Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries."
        isNarrow
      />
      <GridCard data={cultureData} />
      <Price
        h3Text="FEEL THE CULTURE"
        pText="The culture in Bali is colourful and ready to be explored by the curious. Contact us so we can make sure that you don't miss anything crucial during your trip."
        button="PRICING"
        price="$514"
        isGreen
      />
      <ContactForm pText="Bali is an amazing place to immerse yourself into a rich culture, which can surprise you with its history, monuments, celebrations and, of course, food. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet." />
    </div>
  );
};

export default Culture;
