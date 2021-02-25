import styled from "styled-components"

export const Wrapper = styled.div`
    color: ${props => props.theme.text.normal };
    margin-bottom: calc(var(--su) * 2);

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 800px) {
        margin-bottom: var(--su);
    }

`

export const Meta = styled.h6`
    margin-bottom: 16px;

    @media (min-width: 800px) {
        margin-bottom: 16px;
    }

`

export const Title = styled.h3`
    margin-bottom: 8px;

    @media (min-width: 800px) {
        margin-bottom: 12px;
    }

`

export const Description = styled.p`
    margin-bottom: 16px;

    @media(min-width: 800px) {
        margin-bottom: 24px;
    }
    
`