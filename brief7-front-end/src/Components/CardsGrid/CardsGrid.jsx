import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "@/app/FiltersContext";
import Card from "@/Components/Card/Card";

export default function CardsGrid(props) {
  let trips = props.trips;

  const [filteredTrips, setFilteredTrips] = useState([]);
  const { filters } = useContext(FiltersContext);

  useEffect(() => {
    const filtered = props.trips.filter((trip) => {
      const destinationFilterPassed = !filters.destination || trip.destination.city === filters.destination;
      const categoryFilterPassed = !filters.category || trip.category[0].name === filters.category;
      const startDateFilterPassed = !filters.startDate || new Date(trip.start_date) <= new Date(filters.startDate);
      const endDateFilterPassed = !filters.endDate || new Date(trip.end_date) >= new Date(filters.endDate);

      if (destinationFilterPassed && categoryFilterPassed && (startDateFilterPassed && endDateFilterPassed)) {
        console.log({startDateFilterPassed, endDateFilterPassed});
      }
      return destinationFilterPassed && categoryFilterPassed && (startDateFilterPassed && endDateFilterPassed);
    });
    setFilteredTrips(filtered);
  }, [filters]);

  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-0 lg:pt-[12px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTrips.map((trip) => {
            const imageSrc = `/imgs/card_300x180.jpg`;
            return (
              <Card
                key={trip.id}
                image={imageSrc}
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
