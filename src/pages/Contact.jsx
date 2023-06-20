import React from "react";
import { Card } from "../components/Card";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";
import Hero from "../components/Hero";
import ContactHeroImg from "../assets/HeroImages/Contact-Hero-Img.avif";

const Contact = () => {
  return (
    <div>
      <Hero image={ContactHeroImg} h1Text="CONTACT US" />
      <Card
        h2Text="COME VISIT"
        pText="We’ve been obsessed with exploring this island for several years – let us show you the best spots we’ve found! From breathtaking locations to colorful culture and relaxing mood, we can help you organize a memorable stay in one of the most magical places on the planet."
        isNarrow
      />
      <ContactForm isContact />
      <SocialMedia />
    </div>
  );
};

export default Contact;
