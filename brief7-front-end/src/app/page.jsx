"use client";

import { useEffect, useState, createContext } from "react";
import Hero from "@/Components/Hero/Hero";
import CardsRow from "@/Components/CardsRow/CardsRow";

import RequestMaker from "@/js/class/RequestMaker";

export default function Home() {


  const [trips, setTrips] = useState();

  useEffect(() => {
    new RequestMaker("http://127.0.0.1:8000/api/trips", "GET").send().then((data) => {
      setTrips(data);
    });
  }, []);

  return (
    <>
      <Hero />
      <main>
        {trips && ( <CardsRow trips={trips} /> )}
      </main>
    </>
  );
}
