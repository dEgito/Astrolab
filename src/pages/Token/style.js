import styled from "styled-components";
import Background from "../../assets/images/bg.png";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #560526;

  font-family: Inter;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 2rem 1rem 1rem;

    color: #ffffff;

    h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 0.8rem;
      color: #ffc700;
    }
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-family: Inter;
  background: url(${Background}) repeat;
  background-color: #000;
  border-radius: 30px 30px 0 0;

  a {
      font-size: .8rem;
      margin-bottom: 4rem;
      text-decoration: none;
      color: #ffffff;

      &:hover {
          cursor: pointer;

          span {
            color: #ffc700;
            transition: all 0.2s ease-in-out;
          }
      }
  }

  span {
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  }
`;
