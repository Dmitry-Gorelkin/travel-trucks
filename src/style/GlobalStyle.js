import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    body {
    margin: 0;

    z-index: 1;

    font-family: 'Inter', sans-serif; 

    background-color: ${p => p.theme.colors.white};
    }

    html, body, #root {
        /* height: 100%; */
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    }

    p {
    margin: 0;
    }
    
    ul,
    ol {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }
    
    .ReactModal__Body--open {
        overflow: hidden;
    }

`;
