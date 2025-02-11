import React from "react";
import Header from "../components/Header";
import Ekibimiz from "../components/Ekibimiz";
import HomeHizmetlerimiz from "../components/HomeHizmetlerimiz";
import Blog from "./Blog";

function Home() {
  return (
    <div>
      <Header />
      <Ekibimiz/>
      <HomeHizmetlerimiz/>
    </div>
  );
}

export default Home;
