import React, { useContext } from "react"
import { light, dark } from "../../styles/Themes"
import { ThemeContext } from "../../contexts/ThemeContext"
import { ThemeProvider} from "styled-components"

export default ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const currentTheme = theme === "light" ? light : dark;

    return (
        <ThemeProvider theme={currentTheme}>
            {children}
        </ThemeProvider>
    )
}