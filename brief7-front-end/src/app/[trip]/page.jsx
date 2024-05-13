"use client";

import About1 from "@/Components/About/About";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import RequestMaker from "@/js/class/RequestMaker";
import { API_URL } from "@/js/config";
import { useEffect, useState } from "react";

export default function tripDetails(props) {
  const [tripInfo, setTripInfo] = useState();
  let tripName = props.params.trip.split("-").join(" ");

  useEffect(() => {
    new RequestMaker(API_URL + "trip/" + tripName, "GET").send().then((data) => {
      setTripInfo(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {tripInfo && <About1 tripInfo={tripInfo} />}
      </main>
      <Footer />
    </>
  );
}
