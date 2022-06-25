import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --gray-300: #e7e7e7;
        --gray-500: rgba(47, 47, 47, 0.76);
        --black: #000000;
        
        --yellow-500: #FFC700;
        --wine-500: #560526;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--yellow-500);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 87.5%;
    }

    body {
        color: var(--gray-300);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    
`;

export default GlobalStyle;
