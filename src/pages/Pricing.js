import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";
import Prices from "../components/Prices/Prices";

const Pricing = () => {
  useScrollToTop();

  return (
    <Hero isDynmic>
      <Prices />
    </Hero>
  );
};

export default Pricing;
