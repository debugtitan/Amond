import HeroSection from "~/components/Herosection";
import WhyChooseUs from "~/components/WhyChooseUs";
import Features from "~/components/Features";
import Testimonial from "~/components/Testimonials";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
}
