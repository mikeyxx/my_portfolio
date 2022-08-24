// This is About component, It will contain about us info.
import wave from "../../assets/waves.svg";
import styled from "styled-components";

const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  position: relative;
  top: -1rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="waves" width="400" height="400" />
    </AboutSection>
  );
};

export default About;
