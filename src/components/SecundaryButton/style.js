import styled from "styled-components";

const Button = styled.button`
  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 180px;
  padding: 0.8rem;
  border: none;
  transition: all 0.3s ease-out;
  color: #ffffff;
  border-bottom: 4px solid #ffffff;
  background: none;

  &:hover {
    font-size: .9rem;
    font-weight: 700;
  }
`;

export default Button;
