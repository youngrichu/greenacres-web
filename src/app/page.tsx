import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import CoffeeShowcase from "@/components/CoffeeShowcase";
import CoffeeJourney from "@/components/CoffeeJourney";
import CoffeeMap from "@/components/CoffeeMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Statistics />
        <CoffeeShowcase />
        <CoffeeJourney />
        <CoffeeMap />
      </main>
      <Footer />
    </>
  );
}
