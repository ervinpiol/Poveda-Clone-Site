import React from "react";
import Hero from "../components/Hero";
import { Card } from "../components/Card";
import GridCard from "../components/GridCard";
import { adventureData } from "../data/adventureData";
import Price from "../components/Price";
import ContactForm from "../components/ContactForm";
import AdventureHeroImg from "../assets/HeroImages/adventures-hero-img.avif";

const Adventure = () => {
  return (
    <div>
      <Hero image={AdventureHeroImg} h1Text="ACTION" isAdventure />
      <Card
        h2Text="EXPERIENCE HEAVEN"
        pText="If you want to find as many adventures as you can find, Bali is the place for you. Hop on a scooter, surf the waves or explore the beautiful nature full of exciting wildlife - wherever you go, the island will offer a lot of exciting opportunities for your adventurous heart."
      />
      <GridCard data={adventureData} />
      <Price
        h3Text="ADVENTURE IN BALI"
        pText="If you want to choose active activities to make your holiday memorable, we can help you with that. Contact us to organise your trip."
        button="PRICING"
        price="$569"
      />
      <ContactForm pText="Bali is an amazing place to have adventures in. Be it a ride with a scooter, a surf in the beautiful sea or an expedition into the wildlife, you will find plenty of action. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet." />
    </div>
  );
};

export default Adventure;
