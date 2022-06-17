// This is Contact component, it will contain contact form.
import Twitter from "../../assets/twitter-brands.svg";
import LinkedIn from "../../assets/linkedin-in-brands.svg";
import GitHub from "../../assets/github-brands.svg";
import Email from "../../assets/email-brands.svg";
import styled from "styled-components";

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  margin-bottom: 3rem;

  position: relative;
  color: var(--white);
  &:before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`;
const Icon = styled.div`
  display: inline;
  margin-bottom: 3rem;

  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }
    &:hover {
      img {
        filter: invert(20%);
        sepia(100%) saturate(300%) hue-rotate(580deg)
      }
    }
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    padding: 3.5px;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <Icon>
        <a href="https://Twitter.com/topboy_mikey" target="blank">
          <img
            src={Twitter}
            alt="Twitter"
            style={{
              backgroundColor: "white",
              marginTop: "0.2rem",
              borderRadius: "5px",
            }}
          />
        </a>
        <a
          href="https://linkedin.com/in/michael-27
"
          target="blank"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            style={{
              backgroundColor: "white",
              marginTop: "0.2rem",
              borderRadius: "5px",
            }}
          />
        </a>
        <a href="https://github.com/mikeyxx" target="blank">
          <img
            src={GitHub}
            alt="Github"
            style={{
              backgroundColor: "white",
              marginTop: "0.2rem",
              borderRadius: "5px",
            }}
          />
        </a>
        <a href="mailto:michaelogboo@gmail.com" target="blank">
          <img
            src={Email}
            alt="Gmail"
            style={{
              backgroundColor: "white",
              marginTop: "0.2rem",
              borderRadius: "5px",
            }}
          />
        </a>
      </Icon>
    </ContactSection>
  );
};

export default Contact;
