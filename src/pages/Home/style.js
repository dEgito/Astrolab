import Background from "../../assets/bg.png";
import styled from "styled-components";


export const Container = styled.div`
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

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 2rem;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }

  a {
    color: #FFC700;
  }
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 12rem;
  min-width: 8rem;
  margin: 3rem;

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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
`;
