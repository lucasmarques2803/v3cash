import styled from "styled-components";

const Name = styled.figcaption`
    text-shadow: 0.1rem 0.1rem 0 var(--color-purple),
                -0.1rem -0.1rem 0 var(--color-purple),
                0.1rem -0.1rem 0 var(--color-purple),
                -0.1rem 0.1rem 0 var(--color-purple);
    letter-spacing: 0.2rem;
`

const Logo = styled.figure`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-rose);
    font-size: 3rem;
`

export default {
    Logo,
    Name
}