import React, { useContext, useEffect, useState } from "react";

import { FiltersContext } from "@/app/FiltersContext";

import Card from "@/Components/Card/Card";
import { UNSPLASH_KWS } from "@/js/config";

export default function CardsGrid(props) {
  let trips = props.trips;
  console.log(trips);

  const [filteredTrips, setFilteredTrips] = useState([]);
  const { filters } = useContext(FiltersContext);

  // Update filteredTrips whenever filters change
  useEffect(() => {
    console.log("Applying filters:", filters);
    // Perform filtering logic here based on the filters
    const filtered = props.trips.filter((trip) => {
      // Example filter condition, modify as needed
      return trip.category[0].name === filters.category;
    });
    console.log("Filtered trips:", filtered);
    setFilteredTrips(filtered);
  }, [props.trips, filters]);

  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-0 lg:pt-[12px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTrips.map((trip) => {
            console.log(trip);
            console.log(filters.category);
            return (
              <Card
                key={trip.id}
                image={UNSPLASH_KWS}
                CardTitle={trip.name}
                titleHref={"/" + trip.name.split(" ").join("-")}
                btnHref={"/" + trip.name.split(" ").join("-")}
                CardDescription={trip.description}
                Button="Voir Détails"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
