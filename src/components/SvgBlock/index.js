import styled from "styled-components";

const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;

  @media only screen and (max-width: 48em) {
    display: none;
  }
`;

const SvgBlock = ({ svg }) => {
  return (
    <RightBlock>
      <img src={svg} alt="Services" />
    </RightBlock>
  );
};

export default SvgBlock;
