//This is home page, It will contains all the sections require in this page.
// Let's impor all the required sections here

import HeroSection from "../Sections/Hero";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;
