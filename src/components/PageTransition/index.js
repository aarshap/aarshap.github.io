import React from "react"
import * as Styled from "./styled"

const duration = 0.5

const variantLeft = {
    initial: {
        scaleX: 1,
    },
    enter: {
        originX: [0, 0, 0],
        scaleX: [1, 1, 0],
        transition: {
            duration: duration,
            ease: "easeOut",
            times: [0, 0, 1]
        },
    },
    exit: {
        originX: [1, 1, 1],
        scaleX: [0, 0, 1],
        transition: {
            duration: duration,
            ease: "easeIn",
            times: [0, 0, 1]
        },
    },
}

const variantRight = {
    initial: {
        scaleX: 1,
    },
    enter: {
        originX: [1, 1, 1],
        scaleX: [1, 1, 0],
        transition: {
            duration: duration,
            ease: "easeOut",
            times: [0, 0, 1]
        },
    },
    exit: {
        originX: [0, 0, 0],
        scaleX: [0, 0, 1],
        transition: {
            duration: duration,
            ease: "easeIn",
            times: [0, 0, 1]
        },
    },
}

export default () => {
    return (
        <>
            <Styled.CurtainLeft
                animate="enter"
                initial="initial"
                exit="exit"
                variants={variantLeft}
            />
            <Styled.CurtainRight
                animate="enter"
                initial="initial"
                exit="exit"
                variants={variantRight}
            />
        </>
    )
}