import React from "react";
import Live from "../components/Live";
import Testimonials from "../components/Testimonials";
import SocialMedia from "../components/SocialMedia";
import SubscriptionForm from "../components/SubscriptionForm";
import GridCard from "../components/GridCard";
import { baliInfoData } from "../data/baliInfoData";
import Hero from "../components/Hero";

import HeroImg from "../assets/HeroImages/Home-Hero-Img.webp";

const Home = () => {
  return (
    <div>
      <Hero image={HeroImg} h1Text="VISIT BALI" homeHero />
      <Live />
      <GridCard data={baliInfoData} isReverse />
      <Testimonials />
      <SocialMedia />
      <SubscriptionForm />
    </div>
  );
};

export default Home;
