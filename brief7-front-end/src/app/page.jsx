"use client";

import RequestMaker from "@/js/class/RequestMaker";

import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import CardsRow from "@/Components/CardsRow/CardsRow";
import ButtonPrimary from "@/Components/Button/ButtonPrimary";

export default function Home() {
  
  return (
    <>
      <Hero />
      <main>
        <CardsRow />
        <div
          className="cursor-pointer bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]"
          onClick={() => {
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
            // let request = new RequestMaker("http://127.0.0.1:8000/api/trips", "GET");
            // let response = request.send();
            // console.log(response);
          }}
        >
          CLICK
        </div>
        <ButtonPrimary
          onClick={() => {
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
            // let request = new RequestMaker("http://127.0.0.1:8000/api/trips", "GET");
            // let response = request.send();
            // console.log(response);
          }}
        />
      </main>
    </>
  );
}
