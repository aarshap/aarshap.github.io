import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import Container from "../Container"

export default (props) => {
    return (
        <Container>
            <Styled.Wrapper>
                <Fade>
                    {props.children}
                </Fade>
            </Styled.Wrapper>
        </Container>
    )
}