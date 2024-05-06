"use client";

import { useEffect, useState, createContext } from "react";
import Hero from "@/Components/Hero/Hero";
import CardsRow from "@/Components/CardsRow/CardsRow";

import RequestMaker from "@/js/class/RequestMaker";
import Footer from "@/Components/Footer/Footer";

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
        <section class="dark:bg-dark bg-white py-[0px]">
          <div class="mx-auto px-4 sm:container">
            <div class="border-stroke dark:border-dark-3 border-b">
              <h2 class="text-dark mb-2 text-2xl font-semibold dark:text-white">Destinations coup de coeur 💖</h2>
              <p class="text-body-color dark:text-dark-6 mb-6 text-sm font-medium">
                Si nous devions partir, voici vers où nous nous envolerions.
              </p>
            </div>
          </div>
        </section>
        {trips && <CardsRow trips={trips} />}
        <section class="dark:bg-dark bg-white py-[0px]">
          <div class="mx-auto px-4 sm:container">
            <div class="border-stroke dark:border-dark-3 border-b">
              <h2 class="text-dark mb-2 text-2xl font-semibold dark:text-white">Amoureux de la nature 🌳</h2>
              <p class="text-body-color dark:text-dark-6 mb-6 text-sm font-medium">
                Si vous aimez les paysages, les étendues d'eau et les sentiers de randonnée, nous avons quelque chose
                pour vous.
              </p>
            </div>
          </div>
        </section>
        {trips && <CardsRow trips={trips} />}
      </main>
      <Footer />
    </>
  );
}
