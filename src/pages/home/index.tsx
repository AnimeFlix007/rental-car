import { Fragment } from "react";
import HeroSection from "src/components/home/HeroSection";
import Footer from "src/components/shared/Footer";
import Header from "src/components/shared/Header";

export default function index() {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <Footer />
    </Fragment>
  )
}