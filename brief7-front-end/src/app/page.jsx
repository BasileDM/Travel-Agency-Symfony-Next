"use client";

import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import CardsRow from "@/Components/CardsRow/CardsRow";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <CardsRow />
      </main>
    </>
  );
}
