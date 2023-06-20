import React from "react";
import Live from "../components/Live";
import Testimonials from "../components/Testimonials";
import SocialMedia from "../components/SocialMedia";
import SubscriptionForm from "../components/SubscriptionForm";
import GridCard from "../components/GridCard";
import { baliInfoData } from "../data/baliInfoData";
import Hero from "../components/Hero";

<<<<<<< HEAD
import HeroImg from "../assets/HeroImages/Home-Hero-Img.avif";
=======
import HeroImg from "../assets/HeroImages/Home-Hero-Img.webp";
>>>>>>> b2272fb46f1a624ad28d8b4aac7cb08dd32bb993

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
