import styled from "styled-components"

export const Wrapper = styled.div`
    margin: var(--su) auto;
    width: auto;

    @media (min-width: 800px) {
        float: ${props => props.float ? "right" : "none" };
        margin: ${props => props.float ? "0 calc(var(--su) * -1) calc(var(--su) / 2) calc(var(--su) / 2)" : "var(--su) calc(var(--su) * -1)" };
        width: ${props => props.float ? "460px" : "auto" };
    }

`

export const Caption = styled.h6`
    color: ${(props => props.theme.text.muted)};
    margin-top: 40px;
`