import styled from "styled-components";

export const TextInput = styled.input`
  height: 2rem;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 1rem;
  outline: none;

  width: ${(props) => {
    switch (props.type) {
      case "token":
        return "10rem";

      default:
        return "16rem;";
    }
  }};

  font-size: ${(props) => {
    switch (props.type) {
      case "token":
        return "1rem;";

      default:
        return "0.8rem;";
    }
  }};

  text-align: ${(props) => {
    switch (props.type) {
      case "token":
        return "center;";

      default:
        return "left;";
    }
  }};

  &:focus {
    outline: 2px solid #ffc700;
    font-size: ${(props) => {
      switch (props.type) {
        case 'token':
          return '1.1rem'

        default:
          return '0.9rem'
      }
    }};
  }
`;
