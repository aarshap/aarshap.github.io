import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    // Variables

    :root {

        // Font families

        --family-heading: paralucent, sans-serif;
        --family-body: paralucent-text, sans-serif;
        --family-accent: paralucent-condensed, sans-serif;

        // Line heights

        --line-height-tight: 1.1;
        --line-height-heading: 1.2;
        --line-height-paragraph: 1.9;
        --line-width: 2px;

        // Spacing units
        
        --su: 32px;
        --nav-height: 102px;

        @media (min-width: 800px) {
            --su: 54px;
            --nav-height: 206px;
        }

        @media (min-width: 1200px) {
            --su: 104px;
        }

        @media (min-width: 1600px) {
            --su: 120px;
        }

        @media (min-width: 2560px) {
            --su: 160px;
        }

        // Element sizes

        --article-max-width: 800px;
        --site-max-width: 1600px;

    }

    // Reset and adjusting defaults

    *,
    *:after,
    *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    svg {
        display: block;
    }

    video {
        display: block;
        width: 100%;
    }

    // Base page styles

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.background.normal};
        color: ${props => props.theme.text.normal};
        font-family: var(--family-body);
        font-weight: 400;
        line-height: var(--line-height-heading);
        
    }

    // Base typography styles
        
    h1 {
        font-family: var(--family-heading);
        font-size: 52px;
        font-weight: 300;
        line-height: var(--line-height-tight);

        @media screen and (min-width: 300px) {
            font-size: calc(46px + (145 - 46) * ((100vw - 300px) / (799 - 300)));
        }

        @media screen and (min-width: 800px) {
            font-size: calc(74px + (118 - 74) * ((100vw - 800px) / (1200 - 800)));
        }

        @media screen and (min-width: 1200px) {
            font-size: calc(107px + (152 - 107) * ((100vw - 1200px) / (1600 - 1200)));
        }

        @media screen and (min-width: 1600px) {
            font-size: calc(113px + (194 - 113) * ((100vw - 1600px) / (2560 - 1600)));
        }

        @media screen and (min-width: 2560px) {
            font-size: 187px;
        }

    }

    h2 {
        font-family: var(--family-heading);
        font-size: 58px;
        font-weight: 300;
        line-height: var(--line-height-tight);

        @media (min-width: 800px) {
            font-size: 120px;
        }

    }

    h3 {
        font-family: var(--family-heading);
        font-size: 32px;
        font-weight: 500;
        line-height: var(--line-height-heading);

        @media (min-width: 800px) {
            font-size: 56px;
        }

    }

    h4 {
        font-family: var(--family-body);
        font-size: 20px;
        font-weight: 400;
        line-height: var(--line-height-heading);

        @media (min-width: 800px) {
            font-size: 28px;
        }

    }

    h5 {
        font-family: var(--family-body);
        font-size: 20px;
        font-weight: 400;
        line-height: var(--line-height-heading);

        @media (min-width: 800px) {
            font-size: 24px;
        }

    }

    h6 {
        font-family: var(--family-body);
        font-size: 16px;
        font-weight: 400;
        line-height: var(--line-height-tight);
        text-transform: uppercase;

        @media (min-width: 800px) {
            font-size: 20px;
        }

    }

    p {
        font-family: var(--family-body);
        font-size: 20px;
        font-weight: 400;
        line-height: var(--line-height-paragraph);

        @media (min-width: 800px) {
            font-size: 28px;
        }

    }

    blockquote {
        border-left: var(--line-width) solid ${props => props.theme.line.normal};
        padding: 8px 32px;
        font-size: 32px;
        line-height: var(--line-height-paragraph);
    }

    pre {
        background: ${props => props.theme.code.background};
        color: ${props => props.theme.code.text};
        padding: 24px;
        font-size: 13px;

        code {
            display: block;
            overflow-x: scroll;
        }

        @media (min-width: 800px) {
            font-size: 18px;
            padding: 32px;
        }

    }

    code {
        background: ${props => props.theme.code.background};
        color: ${props => props.theme.code.text};
        font-size: 13px;

        @media (min-width: 800px) {
            font-size: 18px;
        }


    }

    // Link chaos

    a,
    a:visited,
    button {
        color: ${props => props.theme.link.text.normal};
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.link.underline.normal};
        text-decoration-thickness: 1.5px;
        text-underline-offset: 0.18em;

        svg path {
            fill: ${props => props.theme.link.text.normal};
        }

        &:hover {
            color: ${props => props.theme.link.text.hover};
            text-decoration-color: ${props => props.theme.link.underline.hover};

            svg path {
                fill: ${props => props.theme.link.text.hover};
            }

        }

        &.inverted {
            color: ${props => props.theme.link.text.inverted};
            text-decoration-color: ${props => props.theme.link.underline.inverted};

            svg path {
                fill: ${props => props.theme.link.text.inverted};
            }

            &:hover {
                color: ${props => props.theme.link.text.invertedHover};
                text-decoration-color: ${props => props.theme.link.underline.invertedHover};

                svg path {
                    fill: ${props => props.theme.link.text.invertedHover};
                }    

            }

        }

        &.hideUnderline {
            text-decoration: none;
        }

    }

    h1,
    h2,
    h3 {

        a,
        a:visited,
        button {
            text-decoration-thickness: 2px;
            text-underline-offset: .08em;
        }

    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font: inherit;
        line-height: initial;
        margin: 0;
        padding: 0;
        text-transform: inherit;
    }
    
    // Generic .has-shadow class to place a shadow on any element

    .has-shadow {
        box-shadow: 0 32px 32px rgba(0,0,0,0.05), 0 16px 16px rgba(0,0,0,0.05), 0 8px 8px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.2);
    }

`
export default GlobalStyles