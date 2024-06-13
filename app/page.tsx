import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Treatments from "./components/Treatments";
import Services from "./components/Services";
import CallTOAction from "./components/CallTOAction";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Treatments/>
      <Services/>
      <Stats/>
      <CallTOAction/>
      <Reviews/>
      <Faqs/>
    </div>
  );
}
