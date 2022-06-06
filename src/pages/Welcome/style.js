import styled from "styled-components";
import Background from "../../assets/bg.png";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #560526;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 1rem;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-family: Inter;
  background: url(${Background}) repeat;
  background-color: #000;
  border-radius: 30px 30px 0 0;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
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
