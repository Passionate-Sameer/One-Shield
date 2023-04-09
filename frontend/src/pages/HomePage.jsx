import Hero from "../components/molecules/panels/Hero";
import Welcome from "../components/molecules/panels/Welcome";
import Brackets from "../components/molecules/panels/Brackets";
import CardDeck from "../components/molecules/panels/CardDeck";
import QuickEstimate from "../components/molecules/forms/QuickEstimateForm";

function Home() {

  return (
    <>
      <Hero/>
      <Welcome/>
      <Brackets/>
      <CardDeck/>
      <QuickEstimate/>
    </>
  )
}

export default Home;
