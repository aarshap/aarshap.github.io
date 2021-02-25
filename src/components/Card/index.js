import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import { Link } from "gatsby"
import Button from "../Button"
import InlineDivider from "../InlineDivider"

export default (props) => {
    return (
        <Styled.Wrapper key={props.id}>
            <Fade>
                {props.meta &&
                    <Styled.Meta>
                        {props.meta.primary}
                        {props.meta.secondary &&
                            <span>
                                <InlineDivider />{props.meta.secondary}
                            </span>
                        }
                    </Styled.Meta>
                }
                <Styled.Title>
                    <Link to={props.slug}>{props.title}</Link>
                </Styled.Title>
                <Styled.Description>{props.dek}</Styled.Description>
                <Button to={props.slug}>{props.cta}</Button>
            </Fade>
        </Styled.Wrapper>
    )
}