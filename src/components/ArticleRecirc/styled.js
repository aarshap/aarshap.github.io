import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.background.normal };
    margin: calc(var(--su) * -1) auto calc(var(--su) * 3);
    max-width: var(--article-max-width);

    @media (min-width: 800px) {
        margin: var(--su) auto;
    }

`

export const Cards = styled.div`
    margin: 0 auto;

    :not(:last-child) {
        margin: 0 auto calc(var(--su) * 2);

        @media (min-width: 800px) {
            margin: 0 auto var(--su);
        }    

    }

`