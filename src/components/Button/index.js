import styled from "styled-components"
import border from "../../assets/button-border.png"

const Button = styled.button`
    background-color: var(--color-sand);
    border: none;
    font-family: inherit;
    font-size: 1.2rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
    color: var(--color-violet);
    text-shadow: 0.08rem 0.08rem 0 var(--color-sand-dark),  
                 0.08rem -0.08rem 0 var(--color-sand-dark),
                 -0.08rem 0.08rem 0 var(--color-sand-dark),
                 -0.08rem -0.08rem 0 var(--color-sand-dark),
                 0.08rem 0rem 0 var(--color-sand-dark),
                 -0.08rem 0rem 0 var(--color-sand-dark);
    padding-bottom: 0.6rem;
    border-image: url(${border}) 8 fill/ 8px / 8px;
    image-rendering: pixelated;
`

export default Button