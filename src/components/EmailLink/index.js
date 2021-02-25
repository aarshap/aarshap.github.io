import React from "react"
import Tooltip from "../Tooltip"

export default (props) => {
    const emailTooltip = <span>Be nice.<br />aaron@aaron.mn</span>

    return (
        <Tooltip tooltip={emailTooltip}>
            <a className={props.inverted && "inverted"} href="mailto:aaron@aaron.mn">Email</a>
        </Tooltip>
    )
}