import styled from "styled-components"

export const Wrapper = styled.div`
    border-top: var(--line-width) solid ${props => props.theme.line.normal};
    position: relative;
    z-index: 3;
`

export const Headshot = styled.div`
    border-radius: 50%;
    height: 80px;
    margin-bottom: -40px;
    overflow: hidden;
    position: relative;
    top: -40px;
    user-select: none;
    width: 80px;

    @media (min-width: 1600px) {
        height: 160px;
        margin-bottom: -80px;
        top: -80px;
        width: 160px;
    }

`

export const Primary = styled.div`
    border-bottom: var(--line-width) solid ${props => props.theme.line.inverted};
    padding-bottom: calc((var(--su) * 2) - 16px); // Accounts for bottom margin on links
    padding-top: var(--su);

    @media (min-width: 800px) {
        padding-bottom: calc(var(--su) - 16px);
    }

    h6 {
        margin: var(--su) 0 16px;

        @media (min-width: 800px) {
            margin: 0 0 24px;
        }

    }

    p {
        margin-bottom: 16px;

        @media (min-width: 800px) {
            margin-bottom: 24px;
        }
        
    }

`

export const Secondary = styled.div`
    padding-bottom: calc((var(--su) * 2) - 16px); // Accounts for bottom margin on links
    padding-top: var(--su);

    @media (min-width: 800px) {
        padding-bottom: calc(var(--su) - 16px);
    }


`

export const LinkList = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        display: inline-block;
        margin: 0 16px 16px 0;
    }

`

export const Footnote = styled.h5`
    color: ${props => props.theme.text.invertedMuted};
`