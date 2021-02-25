import styled from "styled-components"

export const Wrapper = styled.div`
    border: var(--line-width) solid ${props => props.theme.line.normal};
    margin-bottom: calc(var(--su) * 2);
    padding: calc(var(--su) / 2);

    h5 {
        font-weight: 400;
    }

    ul {
        list-style: none;
    }

    dl {
        margin-bottom: 24px;
        user-select: none;
    }

    dt:not(:last-child) {
        margin-bottom: 16px;
    }

    @media (min-width: 800px) {
        float: right;
        margin: 8px 0 calc(var(--su) / 2) var(--su);
        width: calc(50% - (var(--su) / 2));
    }


`