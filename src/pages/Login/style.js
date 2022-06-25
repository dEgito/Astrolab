import Background from "../../assets/images/bg.png";
import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: var(--wine-500);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  color: var(--white);
  font-family: Inter;
  background: url(${Background}) repeat;
  background-color: var(--black);
  border-radius: 30px 30px 0 0;

  div {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; tá gerando um bug de alinhamento nas outras divs*/
    gap: 0.5rem;

    a {
      color: var(--gray-300);
      padding: 0.2rem 0;
      font-size: 0.8rem;
      font-weight: 700;

      &:hover {
        color: var(--yellow-500);
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  width: 80%;

  a {
    text-decoration: none;
  }
`;
