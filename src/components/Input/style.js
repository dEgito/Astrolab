import styled from "styled-components";

export const TextInput = styled.input`
  font-size: 0.8rem;
  width: 16rem;
  height: 2rem;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 1rem;
  outline: none;

  &:focus {
    font-size: 0.9rem;
    outline: 2px solid #ffc700;
  }
`;
