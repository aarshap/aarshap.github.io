import React, { createContext, useCallback, useState } from "react"

const defaultState = {
    updatePageNavScheme: [false, false],
    setVisibleNavScheme: [false, false]
}  

const NavContext = createContext(defaultState)

const NavContextProvider = (props) => {
    const [pageNavScheme, setPageNavScheme] = useState({
        invertLeft: false,
        invertRight: false
    })

    const [visibleNavScheme, setVisibleNavScheme] = useState({
        invertLeft: false,
        invertRight: false
    })

    const updatePageNavScheme = useCallback((left, right) => {
        setPageNavScheme({
            invertLeft: left,
            invertRight: right
        })
    }, [])

    const updateVisibleNavScheme = useCallback((left, right) => {
        setVisibleNavScheme({
            invertLeft: left,
            invertRight: right
        })
    }, [])

    return (
        <NavContext.Provider value={{pageNavScheme, visibleNavScheme, updatePageNavScheme, updateVisibleNavScheme}}>
            {props.children}
        </NavContext.Provider>
    )
}

export { NavContext, NavContextProvider }