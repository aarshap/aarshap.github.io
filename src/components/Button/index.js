import React from "react"
import * as Styled from "./styled"
import { Link } from "gatsby"

export default (props) => {
    return (
        <Styled.Wrapper>
            <h6>
                <Link to={props.to}>
                    {props.children}
                </Link>
            </h6>
        </Styled.Wrapper>
    )
}