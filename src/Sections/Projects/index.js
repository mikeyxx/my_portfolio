import styled from "styled-components";
import Slider from "react-slick";
// import * as AiIcon from "react-icons/ai";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card";
import Ministore from "../../assets/avatar-1.png";
import BirthdayReminder from "../../assets/avatar-2.png";
import ReactCalculator from "../../assets/avatar-3.png";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  position: relative;

  &:before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--purple);
    transform: translate(-50%);
  }

  @media only screen and (max-width: 23.5em) {
    &::before {
      content: "";
      border: 0;
    }
  }
}
`;

const Carousel = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 40em) {
    width: 90vw;
  }

  .slick-slider .slick-arrow:before {
    color: var(--black);
    font-size: 1.5rem;
    @media only screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: var(--black);
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section id="projects">
      <Title>Here are a few projects I have built</Title>
      <Carousel>
        <Slider {...settings}>
          <Card
            name={
              <>
                <p className="appName">Mini Store</p>
                <div className="btn">
                  <button>
                    <a
                      href="https://github.com/mikeyxx/ministore"
                      target="blank"
                    >
                      Code
                    </a>{" "}
                  </button>
                  <button>
                    <a
                      href="https://react-ministore.netlify.app/"
                      target="blank"
                    >
                      View live
                    </a>
                  </button>
                </div>
              </>
            }
            image={Ministore}
          />
          <Card
            name={
              <>
                <p className="appName">Birthday Reminder </p>
                <div className="btn">
                  <button>
                    {" "}
                    <a
                      href="https://github.com/mikeyxx/birthday-reminder-app"
                      target="blank"
                    >
                      Code
                    </a>{" "}
                  </button>
                  <button>
                    <a
                      href="https://birthday-rem-app.netlify.app/"
                      target="blank"
                    >
                      View live
                    </a>
                  </button>
                </div>
              </>
            }
            image={BirthdayReminder}
          />
          <Card
            name={
              <>
                <p className="appName">Calculator</p>
                <div className="btn">
                  <button>
                    <a
                      href="https://github.com/mikeyxx/react-calculator-application/tree/master"
                      target="blank"
                    >
                      Code
                    </a>{" "}
                  </button>
                  <button>
                    <a
                      href="https://mikeyxx.github.io/react-calculator-application/"
                      target="blank"
                    >
                      View live
                    </a>
                  </button>
                </div>
              </>
            }
            image={ReactCalculator}
          />
        </Slider>
      </Carousel>
    </Section>
  );
};

export default Projects;
