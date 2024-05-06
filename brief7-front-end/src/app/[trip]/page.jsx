"use client";

import About1 from "@/Components/About/About";
import Navbar from "@/Components/Navbar/Navbar";
import RequestMaker from "@/js/class/RequestMaker";
import { useEffect, useState } from "react";

export default function tripDetails(props) {
  const [tripInfo, setTripInfo] = useState();
  let tripName = props.params.trip.split("-").join(" ");
  
  useEffect(() => {
    new RequestMaker("http://127.0.0.1:8000/api/trip/" + tripName, "GET").send().then((data) => {
      setTripInfo(data);
      console.log(data);
    })
  }, []);

  return (
    <>
      <Navbar />
      {tripInfo && <About1 tripInfo={tripInfo} />}
    </>
  );
}
