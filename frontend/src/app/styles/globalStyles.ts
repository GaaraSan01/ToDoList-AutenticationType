import { createGlobalStyle } from 'styled-components';



export const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }

    :root{
        --primary-color: #393e46;
        --secundary-color: #00adb5;
        --terciary-color: #aad8d3;
    }
`;