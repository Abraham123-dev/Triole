import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { ScrollReveal } from "../components/ScrollReveal";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <>
      <section id="home"><ScrollReveal><Hero /></ScrollReveal></section>
      <section id="service"><ScrollReveal><Services /></ScrollReveal></section>
      <section id="about"><ScrollReveal><About /></ScrollReveal></section>
      <section id="testimonial"><ScrollReveal><Testimonials /></ScrollReveal></section>
    </>
  );
}

export default Home;
