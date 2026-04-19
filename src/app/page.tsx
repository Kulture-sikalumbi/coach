
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Coaching from "@/components/Coaching";
import LiveStatusRow from "@/components/LiveStatusRow";
import JayTribe from "@/components/JayTribe";

export default function Home() {
  return (
    <>
      <Navigation />
      <LiveStatusRow />
      <Hero />
      <ServicesGrid />
      <JayTribe />
      <Coaching />
    </>
  );
}
