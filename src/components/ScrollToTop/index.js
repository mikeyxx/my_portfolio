// This is ScrollToTop component, To scroll from anywhere to top
import styled from "styled-components";
import arrow from "../../assets/arrow-up.svg";

const Up = styled.div;

const ScrollToTop = () => {
  const ScrollUp = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <Up onClick={() => ScrollUp()}>
      <img src={arrow} alt="Arrow up" />
    </Up>
  );
};

export default ScrollToTop;
