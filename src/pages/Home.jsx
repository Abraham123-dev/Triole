import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ScrollReveal } from "../components/ScrollReveal";

export function Home() {
  return (
    <>
      <ScrollReveal>
        <Hero />
        <Services />
      </ScrollReveal>
    </>
  );
}

export default Home;
