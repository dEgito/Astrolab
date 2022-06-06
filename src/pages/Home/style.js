import Background from "../../assets/images/bg.png";
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
    gap: 0.5rem;
  }

  a {
    color: #ffc700;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  width: 80%;
`;
