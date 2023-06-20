import React from "react";
import Price from "./Price";
import { weOfferData } from "../data/weOfferData";
import { Card } from "./Card";

const WeOffer = () => {
  return (
    <div className="bg-LightGreen">
      <Card
        h2Text="WHAT WE CAN OFFER"
        pText="Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries."
      />
      {weOfferData.map((item, i) => (
        <div key={i}>
          <Price
            i={i}
            h3Text={item.h3Text}
            pText={item.pText}
            price={item.price}
            link={item.link}
            button="LEARN MORE"
          />
        </div>
      ))}
    </div>
  );
};

export default WeOffer;
