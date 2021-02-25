import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.background.normal};
    max-width: var(--article-max-width);
    margin: var(--su) auto calc(var(--su) * 3);
    position: relative;
    width: 100%;
    z-index: 2;

    @media (min-width: 800px) {
        margin-bottom: calc(var(--su) * 2);
    }

    .mdx-embed {
        margin: var(--su) auto;

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }

    }

    h1, h2 {
        margin: 1em 0;

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }

    }

    h3, h4, h5, h6:not(.caption), header, footer, hgroup, section, blockquote, hr, ol, ul, p, embed, iframe, pre {
        margin: 1.5em 0;

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }

    }

    .twitter-tweet {
        margin-left: auto;
        margin-right: auto;
    }

`