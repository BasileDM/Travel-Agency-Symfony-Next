"use client";

import About1 from "@/Components/About/About";
import Navbar from "@/Components/Navbar/Navbar";

export default function tripDetails(props) {
  console.log(props);
  return (
    <>
      <Navbar />
      <About1 />
    </>
  );
}
