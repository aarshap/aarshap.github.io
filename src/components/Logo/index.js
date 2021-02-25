import React from "react"
import * as Styled from "./styled"

const variant = {
    initial: {
        rotate: 0
    },
    completed: {
        rotate: 360,
        transition: {
            repeat: Infinity,
            duration: 8,
            ease: "linear"
        }
    },
    hover: {
        rotate: 0,
    }
}

export default (props) => {
    return (
        <Styled.Wrapper
            initial="initial"
            animate="completed"
            whileHover="hover"
            variants={variant}
        >
            <Styled.Svg
                inverted={props.inverted}
                viewBox="0 0 40 40"
                fill="#0000FF"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M40 22.419a19.843 19.843 0 01-.425 2.313c-.597 1.037-1.79 1.757-3.38 1.757-1.615 0-2.77-.735-2.77-2.152 0-1.48 1.294-2.098 3.026-2.343l.172-.023c1.057-.143 2.902-.393 3.377-.776v1.224zM23.821 10.402l-7.683 9.432 7.682 2.785.2-12.145-.199-.072z" /><path fillRule="evenodd" clipRule="evenodd" d="M38.687 12.523c-.5-.071-1.004-.104-1.498-.104-3.453 0-6.105 1.534-6.96 4.516l3.614.511c.384-1.118 1.475-2.077 3.367-2.077 1.796 0 2.78.916 2.78 2.525v.064c0 1.042-1.033 1.15-3.57 1.417h-.002l-.49.052c-3.186.341-6.233 1.289-6.233 4.974 0 3.217 2.362 4.92 5.495 4.92 1.226 0 2.218-.272 2.996-.706-4.394 9.198-15.172 13.729-24.976 10.174C2.795 35.012-2.575 23.539 1.216 13.16 5.006 2.786 16.523-2.566 26.938 1.212a19.984 19.984 0 0111.75 11.312zM13.851 22.64l-4.773 5.845-4.064-1.474L23.38 5.043l4.423 1.604-.104 28.59-4.064-1.473.127-7.53-9.91-3.595z" />
            </Styled.Svg>
        </Styled.Wrapper>
    )
}

