import React from "react"
import * as Styled from "./styled"
import Line from "../Line"

export default (props) => {
    return (
        <Styled.Wrapper
            className={props.className && props.className}
            invertColors={props.invertColors}
            isFirst={props.isFirst}
            isLast={props.isLast}
        >
            {props.showLine && <Line invertColor={props.invertColors} /> }
            {props.children}
        </Styled.Wrapper>
    )
}