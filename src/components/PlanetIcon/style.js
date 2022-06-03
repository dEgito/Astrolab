import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: auto;
    margin: 1rem 0 2rem;
`;

export const Planet = styled.img`
display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 12rem;
  min-width: 8rem;
  position: fixed;
  z-index: 10;

  animation: loading 3s linear infinite;
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const PurplePolygon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9;

  animation: loading 8s linear infinite;
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const WhitePolygon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  animation: loading 10s linear infinite;
  @keyframes loading {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;