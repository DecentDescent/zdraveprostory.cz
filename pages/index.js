import "../styles/global.scss";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Reasons from "../components/Reasons";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Head />
      <Hero />
      <Reasons />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;
