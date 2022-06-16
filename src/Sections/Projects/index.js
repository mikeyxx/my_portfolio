import styled from "styled-components";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card";
import Avatar1 from "../../assets/avatar-1.jpg";
import Avatar2 from "../../assets/avatar-2.jpg";
import Avatar3 from "../../assets/avatar-3.jpg";
import Avatar4 from "../../assets/avatar-4.jpg";

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
    <Section>
      <Title>Here are a few projects I have worked on</Title>
      <Carousel>
        <Slider {...settings}>
          <Card text="abcde" name="John Okigbo" image={Avatar1} />
          <Card text="abcde" name="John Okigbo" image={Avatar2} />
          <Card text="abcde" name="John Okigbo" image={Avatar3} />
          <Card text="abcde" name="John Okigbo" image={Avatar4} />
        </Slider>
      </Carousel>
    </Section>
  );
};

export default Projects;
