import React from "react"
import * as Styled from "./styled"
import Container from "../Container"
import Card from "../Card"

export default (props) => {
    return (
        <Container>
            <Styled.Wrapper>
                <Styled.Cards>
                    {props.previous.show &&
                        <Card
                            slug={props.previous.slug}
                            meta={{
                                primary: "Newer post"
                            }}
                            title={props.previous.title}
                            dek={props.previous.dek}
                            cta="Read"
                        />
                    }
                    {props.next.show &&
                        <Card
                            slug={props.next.slug}
                            meta={{
                                primary: "Older post"
                            }}
                            title={props.next.title}
                            dek={props.next.dek}
                            cta="Read"
                        />
                    }
                </Styled.Cards>
            </Styled.Wrapper>
        </Container>
    )
}