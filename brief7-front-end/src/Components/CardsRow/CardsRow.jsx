import React from "react";
import Card from "../Card/Card";
import Link from "next/link";
// import { UNSPLASH_KWS } from "@/js/config";

const CardsRow = (props) => {
  const trips = props.trips;
  return (
    <>
      <section className="bg-gray-2 pb-20 pt-20 dark:bg-dark lg:pb-20 lg:pt-[12px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              image={`/imgs/card_300x180.jpg`}
              CardTitle={trips[0].name}
              titleHref={"/" + trips[0].name.split(" ").join("-")}
              btnHref={"/" + trips[0].name.split(" ").join("-")}
              CardDescription={trips[0].description}
              Button="Voir Détails"
            />
            <Card
              image={`/imgs/card_300x180.jpg`}
              CardTitle={trips[1].name}
              titleHref={"/" + trips[1].name.split(" ").join("-")}
              btnHref={"/" + trips[1].name.split(" ").join("-")}
              CardDescription={trips[1].description}
              Button="Voir Détails"
            />
            <Card
              image={`/imgs/card_300x180.jpg`}
              CardTitle={trips[2].name}
              titleHref={"/" + trips[2].name.split(" ").join("-")}
              btnHref={"/" + trips[2].name.split(" ").join("-")}
              CardDescription={trips[2].description}
              Button="Voir Détails"
            />
            <Card
              image={`/imgs/card_300x180.jpg`}
              CardTitle={trips[3].name}
              titleHref={"/" + trips[3].name.split(" ").join("-")}
              btnHref={"/" + trips[3].name.split(" ").join("-")}
              CardDescription={trips[3].description}
              Button="Voir Détails"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsRow;
