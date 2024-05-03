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
        <div className="rounded cursor-pointer bg-slate-50" onClick={() => {
          fetch("http://127.0.0.1:8000/api/trips", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          }
        }>CLICK</div>
      </main>
    </>
  );
}
