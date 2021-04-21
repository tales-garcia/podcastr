import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
        padding: 0;
    }

    body {
        background: ${({ theme }) => theme.gray50};
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        color: ${({ theme }) => theme.gray500};
        font: 500 1rem Inter, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: Lexent, sans-serif;
        color: ${({ theme }) => theme.gray800};
    }

    button {
        cursor: pointer;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }
`;

export default GlobalStyle;