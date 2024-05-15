import React, { useContext, useEffect, useState } from "react";

import { FiltersContext } from "@/app/FiltersContext";

import Card from "@/Components/Card/Card";
import { UNSPLASH_KWS } from "@/js/config";

export default function CardsGrid(props) {
  let trips = props.trips;

  const [filteredTrips, setFilteredTrips] = useState([]);
  const { filters } = useContext(FiltersContext);

  useEffect(() => {
    const filtered = props.trips.filter((trip) => {
      console.log(filters.end_date, trip.end_date);
      const destinationFilterPassed = !filters.destination || trip.destination.city === filters.destination;
      const categoryFilterPassed = !filters.category || trip.category[0].name === filters.category;
      const startDateFilterPassed = !filters.start_date || new Date(trip.start_date) >= new Date(filters.start_date);
      const endDateFilterPassed = !filters.end_date || new Date(trip.end_date) <= new Date(filters.end_date);

      return destinationFilterPassed && categoryFilterPassed && startDateFilterPassed && endDateFilterPassed;
    });
    setFilteredTrips(filtered);
  }, [filters]);

  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-0 lg:pt-[12px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTrips.map((trip) => {
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
