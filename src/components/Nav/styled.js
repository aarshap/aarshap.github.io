import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    left: 0;
    padding: var(--su);
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    z-index: 3;

    @media (min-width: 800px) {
        padding: 80px var(--su);
    }

`

export const Left = styled.div`
    align-items: center;
    color: ${props => props.invertLeft ? props.theme.text.inverted : props.theme.text.normal };
    display: flex;
    z-index: 3;
`

export const Right = styled.div`
    align-items: center;
    display: flex;
    z-index: 3;

    > *:not(:last-child) {
        margin-right: 12px;

        @media (min-width: 800px) {
            margin-right: 16px;
        }    

    }

`
