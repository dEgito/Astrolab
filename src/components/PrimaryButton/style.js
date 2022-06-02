import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  width: 100%;
  max-width: 16rem;
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  transition: all 0.3s ease-out;
  background-color: ${(props) => {
    switch (props.type) {
      case 'google':
        return 'rgba(47, 47, 47, 0.76);'

      default: 
      return '#FFC700'
    }
  }};

  color: ${(props) => {
    switch (props.type) {
      case 'google':
        return '#ffffff'

      default:
        return '#000000'
    }
  }};

  &:hover {
    font-size: .9rem;
    font-weight: 700;

    color: ${(props) => {
      switch (props.type) {
        case 'google':
          return '#FFC700'

        default:
          return '#000000'
      }
    }};
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

  }
`;
export default Button;