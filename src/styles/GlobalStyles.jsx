import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }

    body{
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`