import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import Container from "../Container"
import InlineDivider from "../InlineDivider"
import Linebreaker from "../Linebreaker"

export default (props) => {
    return (
        <Container isFirst={true} showLine={true}>
            <Styled.Wrapper>
                <Linebreaker>
                    <Fade>
                        <Styled.Category>
                            Blog <InlineDivider /> {props.category}
                        </Styled.Category>
                        <Styled.Title>
                            {props.title}
                        </Styled.Title>
                        <Styled.Dek>
                            {props.dek}
                        </Styled.Dek>
                        <Styled.Date>
                            {props.date}
                        </Styled.Date>
                    </Fade>
                </Linebreaker>
            </Styled.Wrapper>
        </Container>
    )
}