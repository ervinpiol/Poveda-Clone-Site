import React from "react";
import Hero from "../components/Hero";
import { Card } from "../components/Card";
import Testimonials from "../components/Testimonials";
import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";
import GridCard from "../components/GridCard";
import { commentData } from "../data/commentData";
import AboutUsHeroImg from "../assets/HeroImages/About-Us-Hero-Img.avif";

const AboutUs = () => {
  return (
    <div>
      <Hero image={AboutUsHeroImg} h1Text="KNOW US" />
      <Card
        h2Text="IN LOVE WITH BALI"
        pText="We are a couple of nomads who used to explore the globe. The day we stepped our foot on Balinese ground one thing was clear - we fell in love. We kept coming back every few months and understood that this is a love affair for a lifetime. We fully moved here in 2018 and been exploring the island ever since. We’re excited to share what we’ve found and show you this beautiful corner of the world."
      />
      <GridCard data={commentData} />
      <Testimonials />
      <SocialMedia />
      <ContactForm pText="Bali is an amazing place to find exactly what you are looking for, be it relief from stress, an exciting adventure or an immersive culture. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet." />
    </div>
  );
};

export default AboutUs;
