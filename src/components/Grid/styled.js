import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-gap: ${props => props.columnCount === 1 ? "0" : "calc(var(--su) * 1)"};
    grid-template-columns: repeat(1, minmax(0, 1fr));

    > :first-child {
        grid-row: 2;
    }

    @media (min-width: 800px) {
        align-items: ${props => props.alignItems ? props.alignItems : "start" };
        grid-gap: ${props => props.tight ? "calc(var(--su) / 2)" : "calc(var(--su) * 2)" };
        grid-template-columns: repeat(2, minmax(0, 1fr));

        > :first-child {
            grid-column: ${props => props.columnCount === 1 ? "2" : "1"};
            grid-row: 1;
        }

    }

`