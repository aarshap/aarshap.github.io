import styled from "styled-components"

export const Wrapper = styled.div`

    a {
        background: ${props => props.theme.button.background.normal};
        border-radius: 32px;
        color: ${props => props.theme.button.text.normal};
        display: inline-block;
        line-height: var(--line-height-tight);
        margin-bottom: 4px;
        padding: 20px 40px;
        position: relative;
        text-decoration: none;
        user-select: none;

        &:hover { 
            background: ${props => props.theme.button.background.hover};
            color: ${props => props.theme.button.text.hover};    
        }
    
    }

`