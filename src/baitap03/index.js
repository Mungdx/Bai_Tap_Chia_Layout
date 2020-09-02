import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListSmartphone from "./listsmartphone";
import ListLaptop from "./listlaptop";
import Promotion from "./promotion";

export default function Baitap03() {
  return (
    <div className="bg-dark">
      <Header />

      <Carousel />
      <ListSmartphone />
      <ListLaptop />

      <Promotion />
    </div>
  );
}
