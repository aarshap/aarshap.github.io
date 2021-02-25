import React from "react"
import * as Styled from "./styled.js"

const lineVariant = {
    initial: {
        scaleY: 0
    },
    visible: {
        scaleY: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default (props) => {
    return (
        <Styled.Line
            animate="visible"
            initial="initial"
            exit="exit"
            variants={lineVariant}
            invertColor={props.invertColor}
        />
    )
}