import Hero from "./sections/hero/Hero";
import Featured from "./sections/featured/Featured";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero socials={["github", "linkedIn", "resume"]} />
      </section>
      <section id="featured">
        <Featured />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
