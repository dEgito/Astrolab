import styled from "styled-components";
import Background from "../../assets/bg.png";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 0;
  padding: 0;
  height: 100vh;

  color: #ffffff;
  font-family: Inter;
  background: url(${Background}) repeat;
  background-color: #000;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  p {
      margin: 0;
  }

  span {
        text-transform: uppercase;
        color: #ffc700;
        line-height: 2.5rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const Image = styled.img`
  animation: loading 10s linear infinite;
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
