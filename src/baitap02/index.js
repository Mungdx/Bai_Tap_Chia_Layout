import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Whatwedo from "./whatwedo";
import Contact from "./contact";
import Listcard from "./listcard";
import Footer from "./footer";

export default function Baitap02() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Whatwedo />
          <Contact />
        </div>
        <Listcard />
      </div>

      
      <Footer />
    </>
  );
}
