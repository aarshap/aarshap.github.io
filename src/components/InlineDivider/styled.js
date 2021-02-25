import styled from "styled-components"

export const Divider = styled.span`
    border-bottom: var(--line-width) solid ${props => props.invertColor ? props.theme.line.inverted : props.theme.line.normal };
    display: inline-block;
    margin: 0 8px;
    position: relative;
    top: -0.3em;
    width: 24px;
`