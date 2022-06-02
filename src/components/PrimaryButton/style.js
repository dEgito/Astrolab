import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  width: 100%;
  max-width: 16rem;
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  transition: all 0.3s ease-out;
  background-color: #FFC700;

  &:hover {
    font-size: .9rem;
    font-weight: 700;
  }
`;
export default Button;