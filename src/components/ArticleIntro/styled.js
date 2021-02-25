import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.background.normal};
    padding-bottom: var(--su);

    @media (min-width: 800px) {
        text-align: center;
    }

`

export const Category = styled.h6`
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 40px;
    }
    
`

export const Title = styled.h2`
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 40px;
    }

`

export const Dek = styled.p`
    margin: 0 auto 24px;
    max-width: var(--article-max-width);

    @media (min-width: 800px) {
        margin-bottom: 40px;
    }

`

export const Date = styled.h6``
