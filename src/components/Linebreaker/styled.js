import styled from "styled-components"

export const Wrapper = styled.div`
    padding: var(--su) 0;

    @media (min-width: 800px) {
        background-color: inherit; // Requires parent with a background color
        color: inherit;
        position: relative;
        z-index: 1;
    }

`