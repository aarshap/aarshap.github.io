import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import Container from "../Container"
import Image from "../Image"
import InlineDivider from "../InlineDivider"
import Linebreaker from "../Linebreaker"

export default (props) => {
    return (
        <Container isFirst={true} showLine={true}>
            <Styled.Wrapper>
                <Linebreaker>
                    <Fade>
                        <Styled.Meta>
                            Photography <InlineDivider /> {props.date}
                        </Styled.Meta>
                        <Styled.Title>{props.title}</Styled.Title>
                    </Fade>
                    <Styled.ImageWrapper>
                        <Fade delay="1">
                            <Image src={props.keyImage} alt={props.title} />
                        </Fade>
                    </Styled.ImageWrapper>
                </Linebreaker>
            </Styled.Wrapper>
        </Container>
    )
}