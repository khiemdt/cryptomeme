import React from "react";
import About from "./About";
import Assistant from "./Assistant";
import Banner from "./Banner";
import Categories from "./Categories";
import Communication from "./Communication";
import Contact from "./Contact";
import Map from "./Map";
import Partner from "./Partner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Communication />
      <Assistant />
      <Map />
      <Contact />
      <About />
      <Partner />
    </>
  );
};

export default HomePage;
