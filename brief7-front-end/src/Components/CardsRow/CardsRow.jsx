import React from "react";
import Card from "../Card/Card";
import { UNSPLASH_KWS } from "@/js/config";

const CardsRow = (props) => {
  let trips = props.trips;
  console.log(trips);
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              image={UNSPLASH_KWS}
              CardTitle={trips[0].name}
              titleHref="/#"
              btnHref="/#"
              CardDescription={trips[0].description}
              Button="Voir Détails"
            />
            <Card
              image={UNSPLASH_KWS}
              CardTitle={trips[1].name}
              CardDescription={trips[1].description}
              Button="Voir Détails"
            />
            <Card
              image={UNSPLASH_KWS}
              CardTitle={trips[2].name}
              CardDescription={trips[2].description}
              Button="Voir Détails"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsRow;