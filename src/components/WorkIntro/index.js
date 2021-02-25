import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import Grid from "../Grid"
import Image from "../Image"
import InlineDivider from "../InlineDivider"
import Linebreaker from "../Linebreaker"

const WorkIntro = (props) => {
    return (
        <div>
            <Styled.ContainerOverridden
                isFirst={true}
                showLine={true}
                invertColors={props.invertColors}
                className={props.className}
            >
                <Linebreaker>
                    <Styled.Title>
                        <Fade>
                            Work<InlineDivider invertColor={props.invertColors} />{props.title}
                        </Fade>
                    </Styled.Title>
                    <h2>
                        <Fade>{props.tagline}</Fade>
                    </h2>
                </Linebreaker>
                <Grid>
                    <Styled.Meta>
                        <Fade>
                            <div>
                                <h6>Time</h6>
                                <h4>{props.dateStart === props.dateEnd ? props.dateEnd : `${props.dateStart} - ${props.dateEnd}`}</h4>
                            </div>
                            <div>
                                <h6>Role{props.roles.length > 1 && `s`}</h6>
                                {props.roles.map((role, index) => (
                                    <h4 key={index}>{role}</h4>
                                ))}
                            </div>
                        </Fade>
                    </Styled.Meta>
                    <Styled.Intro>
                        <Fade>
                            <p>{props.dek}</p>
                        </Fade>
                    </Styled.Intro>
                </Grid>
            </Styled.ContainerOverridden>
            <Styled.ContainerOverridden
                isFirst={false}
                className={props.className}
            >
                <Styled.KeyImageWrapper>
                    <Image src={props.keyImage} />
                </Styled.KeyImageWrapper>
            </Styled.ContainerOverridden>
        </div>
    )
}

export default WorkIntro