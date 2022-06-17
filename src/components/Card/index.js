import styled from "styled-components";

const CARD = styled.div`
  background-color: var(--nav2);
  color: var(--white);
  height: calc(10rem + 12vw);
  width: calc(11rem + 12vw);
  border-radius: 20px;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 23.5em) {
    width: calc(12rem + 12vw);
  }
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  // object-fit: cover;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  border-radius: 10%;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const Name = styled.h3`
  padding-top: 19rem;
  font-size: calc(0.5rem + 1vw);
  text-align: center;
  position: relative;
  z-index: 9;

  @media only screen and (max-width: 40em) {
    padding-top: 13.3rem;
  }

  @media only screen and (max-width: 48em) {
    padding-top: 14rem;
  }

  @media only screen and (max-width: 23.5em) {
    padding-top: 11.5rem;
  }

  a {
    color: var(--white);
  }
`;

const Card = ({ name, image }) => {
  return (
    <CARD>
      <Image img={image} />
      <Name>{name}</Name>
    </CARD>
  );
};

export default Card;
