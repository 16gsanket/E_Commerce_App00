import React, { useEffect, useState } from "react";
import Banner from "../ui/Banner";
import Products from "../ui/Products";

function Home() {
  

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Banner />
      <h3 className="text-3xl font-bold leading-10 tracking-wide text-center my-8">
        Seamless Innovation, Limitless Possibilities – Elevate Your Experience with Us!
      </h3>
      <Products />
    </div>
  );
}

export default Home;
