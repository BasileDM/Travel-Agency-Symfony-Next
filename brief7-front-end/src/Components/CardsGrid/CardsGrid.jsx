import React from "react";

import Card from "../Card/Card";
import { UNSPLASH_KWS } from "@/js/config";

export default function CardsGrid(props) {
  let trips = props.trips;
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-0 lg:pt-[12px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trips.map((element) => {
            return (
              <Card
                key={element.id}
                image={UNSPLASH_KWS}
                CardTitle={element.name}
                titleHref={"/" + element.name.split(" ").join("-")}
                btnHref={"/" + element.name.split(" ").join("-")}
                CardDescription={element.description}
                Button="Voir Détails"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
