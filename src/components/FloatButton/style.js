import styled from "styled-components";

export const Button = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  width: 3rem;
  height: 3rem;
  background-color: #ffc700;
  border-radius: 100%;
  transition: all .5s ease-in-out;

  img {
      width: 2rem;
  }

  &:hover {
    background-color: #fdfdfd;
    transition: all .5s ease-in-out;
  }
`;
