"use client";

import { useEffect, useState } from "react";

import { FiltersContextProvider } from "@/app/FiltersContext";
import RequestMaker from "@/js/class/RequestMaker";

import CardsGrid from "@/Components/CardsGrid/CardsGrid";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Pagination from "@/Components/Pagination/Pagination";
import FiltersBar from "@/Components/FiltersBar/FiltersBar";

export default function Destinations(props) {
  const [trips, setTrips] = useState();
  const [displayedTrips, setDisplayedTrips] = useState();
  const [page, setPage] = useState();

  useEffect(() => {
    if (props.searchParams.page) {
      setPage(props.searchParams.page);
    } else {
      setPage(1);
    }

    new RequestMaker("http://127.0.0.1:8000/api/trips", "GET").send().then((data) => {
      setTrips(data);
      setDisplayedTrips(data.slice(0, 12));
    });
  }, []);

  useEffect(() => {
    page && trips && setDisplayedTrips(trips.slice(12 * (page - 1), 12 * page));
  }, [trips, page]);

  return (
    <FiltersContextProvider>
      <Navbar />
      <main>
        <FiltersBar />
        {trips && <CardsGrid trips={displayedTrips} />}
        {trips && <Pagination trips={trips} setPage={setPage} page={page} />}
      </main>
      <Footer />
    </FiltersContextProvider>
  );
}
