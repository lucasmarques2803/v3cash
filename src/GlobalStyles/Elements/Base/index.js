import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    @font-face {
        font-family: "mago3";
        src: local("mago3"), url("public/fonts/mago3.woff2") format("woff2");
        font-weight: 500;
    }

    html {
        font-size: 10px;
    }

    body {
        background-color: var(--color-green);
        font-family: "mago3", sans-serif;
    }

    
`

export default Base