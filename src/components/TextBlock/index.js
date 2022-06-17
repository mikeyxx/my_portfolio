// This is TextBlock component, To render text with same format

import styled from "styled-components";

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  @media only screen and (max-width: 48em) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;
const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  letter-spacing: 1.2px;

  @media only screen and (max-width: 48em) {
    font-size: calc(0.4rem + 0.8vw);
  }

  // @media only screen and (max-width: 40em) {
  //   font-size: calc(0.8rem + 0.4vw);
  //   margin-bottom: 1rem;
  // }
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;
const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  @media only screen and (max-width: 48em) {
    font-size: calc(1rem + 1.5vw);
  }
`;
const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
  @media only screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }

  // @media only screen and (max-width: 40em) {
  //   font-size: calc(0.8rem + 0.4vw);
  //   margin-top: 1rem;
  // }
`;

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <LeftBlock>
      <Topic>
        <Circle /> <span>{topic}</span>
      </Topic>
      <Title>{title}</Title>
      <SubText>{subText}</SubText>
      {children}
    </LeftBlock>
  );
};

export default TextBlock;
