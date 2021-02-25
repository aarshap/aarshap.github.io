import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.background.normal};
    padding-bottom: var(--su);
    text-align: center;
`

export const Meta = styled.h6`
    margin-bottom: 16px;

    @media (min-width: 800px) {
        margin-bottom: 48px;
    }

    span {
        color: ${props => props.theme.text.muted};
        font-weight: 400;
    }
    
`

export const Title = styled.h1`
    margin: 0 auto var(--su);
`

export const ImageWrapper = styled.div`
    margin: 0 calc(var(--su) * -1) calc(var(--su) * -1);

    @media (min-width: 800px) {
        margin: 0 calc(var(--su) * -1);
    }

`