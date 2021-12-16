import CheckOurArticles from "../components/home/CheckOurArticles";
import HeroSection from "../components/home/HeroSection";
import OurServices from "../components/home/OurServices";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import useMediaQuery from "../lib/hooks/useMediaQuery";

const Home = () => {
  const isMinWidth768px = useMediaQuery("(min-width: 768px)");

  // // MOBILE SCREEN
  // if (!isMinWidth768px) {
  //   return (
  //     <>
  //       <HeroSection />
  //       <WhyChooseUs />
  //       <OurServices />
  //     </>
  //   );
  // }

  // NON-MOBILE SCREEN
  return (
    <>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <CheckOurArticles />
    </>
  );
};

export default Home;
