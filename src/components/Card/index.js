import styled from "styled-components";

const CARD = styled.div`
  background-color: var(--nav2);
  color: var(--white);
  height: calc(18rem + 12vw);
  width: calc(24rem + 12vw);
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
  height: 90%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  // object-fit: cover;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const Name = styled.h3`
  padding-top: 24rem;
  font-size: calc(0.5rem + 1vw);
  text-align: center;
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 48em) {
    padding-top: 18.5rem;
  }

  @media only screen and (max-width: 23.5em) {
    padding-top: 16.5rem;
  }

  .appName {
    @media only screen and (max-width: 48em) {
      display: none;
    }

    @media only screen and (max-width: 23.5em) {
      display: none;
    }
  }

  a {
    color: var(--nav2);
  }

  .btn button {
    margin: 0.4em;
  }

  button {
    margin-top: 0.7em;
    display: inline-block;

    border: 1px solid white;
    font-size: 18px;
    font-weight: 600;
    padding: 0 5px;
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
