import HeroSection from "../components/home/HeroSection";
import OurServices from "../components/home/OurServices";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import useMediaQuery from "../lib/hooks/useMediaQuery";

const Home = () => {
  const isMinWidth768px = useMediaQuery("(min-width: 768px)");

  const ourServicePlusWhyChooseUsRendered = !isMinWidth768px ? (
    <>
      <WhyChooseUs />
      <OurServices />
    </>
  ) : (
    <>
      <OurServices />
      <WhyChooseUs />
    </>
  );

  return (
    <>
      <HeroSection />
      {ourServicePlusWhyChooseUsRendered}
    </>
  );
};

export default Home;
