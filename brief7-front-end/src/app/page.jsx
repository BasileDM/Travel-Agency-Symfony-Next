"use client";

import { useEffect, useState, createContext } from "react";

import { API_URL } from "@/js/config";

import Hero from "@/Components/Hero/Hero";
import CardsRow from "@/Components/CardsRow/CardsRow";
import Footer from "@/Components/Footer/Footer";

import RequestMaker from "@/js/class/RequestMaker";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  const [trips, setTrips] = useState();

  useEffect(() => {
    new RequestMaker(API_URL + "trips", "GET").send().then((data) => {
      setTrips(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="dark:bg-dark bg-white py-[0px]">
          <div className="mx-auto px-4 sm:container">
            <div className="border-stroke dark:border-dark-3 border-b">
              <h2 className="text-dark mb-2 text-2xl font-semibold dark:text-white">Destinations coup de coeur 💖</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-sm font-medium">
                Si nous devions partir, voici vers où nous nous envolerions.
              </p>
            </div>
          </div>
          {trips && <CardsRow trips={trips} />}
        </section>
        <section className="dark:bg-dark bg-white py-[0px]">
          <div className="mx-auto px-4 sm:container">
            <div className="border-stroke dark:border-dark-3 border-b">
              <h2 className="text-dark mb-2 text-2xl font-semibold dark:text-white">Amoureux de la nature 🌳</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-sm font-medium">
                Si vous aimez les paysages, les étendues d'eau et les sentiers de randonnée, nous avons quelque chose
                pour vous.
              </p>
            </div>
          </div>
          {trips && <CardsRow trips={trips} />}
        </section>
      </main>
      <Footer />
    </>
  );
}
