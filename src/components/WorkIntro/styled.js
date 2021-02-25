import Container from "../Container"
import styled from "styled-components"

export const ContainerOverridden = styled(Container)`

    &.vice {
        background-color: ${props => props.theme.workIntro.vice};
    }

    &.karma {
        background-color: ${props => props.theme.workIntro.karma};
    }

    &.cover {
        background-color: ${props => props.theme.workIntro.cover};
    }

    &.etsy {
        background-color: ${props => props.theme.workIntro.etsy};
    }

    &:first-child {
        padding-bottom: calc(var(--su) * -1);
    }

    &:last-child {
        padding-top: calc(var(--su) * 2);
        margin-bottom: calc(var(--su) * 3);

        @media (min-width: 800px) {
            padding-top: var(--su);
            margin-bottom: calc(var(--su) * 2);
        }

    }

`

export const Title = styled.h4`
    margin-bottom: var(--su);

    @media (min-width: 800px) {
        margin-bottom: calc(var(--su) / 2);
    }
    
`

export const Intro = styled.div`

    p {
        margin-bottom: 24px;
    }

`

export const Meta = styled.div`
    div:not(:last-child) {
        margin-bottom: 40px;
    }

    h4:not(:last-child) {
        margin-bottom: 8px;
    }

    h6 {
        margin-bottom: 16px;
    }

`

export const KeyImageWrapper = styled.div`
    margin-top: calc(var(--su) * -1);
    position: relative;
        bottom: calc(var(--su) * -1);

`