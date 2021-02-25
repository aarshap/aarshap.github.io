import styled from "styled-components"

export const Wrapper = styled.div`
    display: inline-block;
    opacity: 1;
    position: relative;
`

export const Bubble = styled.div`
    background-color: ${props => props.theme.tooltip.background};
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 4px;
    color: ${props => props.theme.tooltip.text};
    display: block;
    font-size: 13px;
    left: 50%;
    line-height: var(--line-height-heading);
    padding: 8px 12px;
    position: absolute;
    text-transform: none;
    transform: translate(-50%);
    top: calc(100% + 12px);

    @media (min-width: 800px) {
        font-size: 16px;
        padding: 12px 16px;
        top: calc(100% + 16px);

    }

`
