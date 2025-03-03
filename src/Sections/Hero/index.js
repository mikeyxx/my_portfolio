// This is HeroSection component, Main top section of website
import styled, { keyframes } from "styled-components";
import Pink from "../../assets/blobPink.png";
import White from "../../assets/blob white.png";
import Purple from "../../assets/blob purple.png";
import Arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";
import { useState } from "react";

const dance = keyframes`
  0% {transform: translateY(-5px)}
  50% {transform: translateY(10px)}
  100% {transform: translateY(-5px)}
`;

const HerosSection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 48em) {
    height: 70vh;
    display: block;
  }
  @media only screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;

  @media only screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media only screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;

  @media only screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vh);
    filter: drop-shadow(2px 4px 6px var(--black));
  }
`;
const Title = styled.span`
  font-size: calc(1rem + 1vw);
  padding-bottom: 1rem;
`;
const Intro = styled.h1`
  font-size: calc(1rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;
const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);

  @media only screen and (max-width: 40em) {
    font-size: calc(0.8rem + 0.4vw);
    margin-top: 1rem;
  }
`;
const CTA = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  img {
    width: 1.5rem;
  }

  @media only screen and (max-width: 40em) {
    font-size: calc(0.8rem + 0.4vw);
  }
`;

const ContactContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
`;
const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  z-index: 7;
  height: auto;
  animation: ${dance} 2.5s ease infinite;

  @media only screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    opacity: 0.5;
  }

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

const HeroSection = () => {
  const [click, setClick] = useState(false);

  const ScrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    ScrollUp(id, e);
  };
  return (
      <HerosSection id="home">
        <Blobs>
          <PinkBlob>
            <img src={Pink} alt="Pink Blob" width="400" height="400" />
          </PinkBlob>
          <WhiteBlob>
            <img src={White} alt="Pink Blob" width="400" height="400" />
          </WhiteBlob>
          <PurpleBlob>
            <img src={Purple} alt="Pink Blob" width="400" height="400" />
          </PurpleBlob>
        </Blobs>

        <MainContent>
          <LeftBlock>
            <Title>Full-Stack Software Engineer | Web & Mobile Applications Developer</Title>
            <Intro>
              I'm passionate about crafting scalable, user-centric applications that solve real-world problems and deliver exceptional digital experiences.
            </Intro>
            <SubText>Let's collaborate to bring your ideas to life.</SubText>
            <ContactContainer>
              <a href="#contact" onClick={(e) => handleClick("contact", e)}>
                <CTA>
                  Get in touch &nbsp;{" "}
                  <img src={Arrow} alt="CTA" width="400" height="400" />
                </CTA>
              </a>
              {/*<a*/}
              {/*  href="https://drive.google.com/file/d/1vdn3eyTmG68SVBJZ_V7ulr-8jTkbbRCm/view?usp=sharing"*/}
              {/*  target="_blank"*/}
              {/*  rel="noreferrer"*/}
              {/*  className="resume"*/}
              {/*>*/}
              {/*  Download Resume*/}
              {/*</a>*/}
            </ContactContainer>
          </LeftBlock>
          <MobileSvg src={Mobile} alt="Mobile Svg" width="400" height="400" />
        </MainContent>
      </HerosSection>
  );
};

export default HeroSection;
