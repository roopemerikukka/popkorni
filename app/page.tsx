'use client';

import styled from "styled-components";
import BackgroundStripe from "./components/BackgroundStripe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Samples from "./components/Samples";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Intro />
        </Section>
        <Section>
          <Samples />
        </Section>
        <BackgroundStripe />
        <Section>
          <Contact />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main``

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 24px;
`
