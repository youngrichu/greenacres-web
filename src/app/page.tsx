import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import AboutUs from "@/components/AboutUs";
import CoffeeMap from "@/components/CoffeeMap";
import CoffeeShowcase from "@/components/CoffeeShowcase";
import EthiopiaCulture from "@/components/EthiopiaCulture";
import CoffeeJourney from "@/components/CoffeeJourney";
import OrderingProcess from "@/components/OrderingProcess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Statistics />
        <AboutUs />
        <CoffeeMap />
        <CoffeeShowcase />
        <EthiopiaCulture />
        <CoffeeJourney />
        <OrderingProcess />
      </main>
      <Footer />
    </>
  );
}
