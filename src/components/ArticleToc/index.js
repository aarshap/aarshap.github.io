import React from "react"
import * as Styled from "./styled.js"
import slugger from "github-slugger"

export default (props) => {
    return (
        <Styled.Wrapper>
            <ul>
                <dl>
                    <h6>Jump to</h6>
                </dl>
                {props.headings.map(heading => (
                    heading.depth === 2 &&
                        <dt key={heading.value}>
                            <h5>
                                <a href={"#" + slugger.slug(heading.value)}>
                                    {heading.value}
                                </a>
                            </h5>
                        </dt>
                ))}
            </ul>
        </Styled.Wrapper>
    )
}