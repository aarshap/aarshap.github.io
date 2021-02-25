import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${props => props.invertColors ? props.theme.background.inverted : props.theme.background.normal };
    color: ${props => props.invertColors ? props.theme.text.inverted : props.theme.text.normal };
    display: none;
    margin: 0 auto;
    padding-top: ${props => props.isFirst ? "calc(var(--nav-height) + var(--su))" : "0" };
    padding-right: var(--su);
    padding-bottom: ${props => props.isLast ? "calc(var(--su) * 3)" : "0" };
    padding-left: var(--su);
    position: relative;

    @media (min-width: 800px) {
        display: block;
        padding-bottom: ${props => props.isLast ? "var(--su)" : "0" };
        padding-top: ${props => props.isFirst ? "var(--nav-height)" : "0" };
    }

`