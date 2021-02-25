import React, { useContext } from "react"
import * as Styled from "./styled"
import { ThemeContext } from "../../contexts/ThemeContext"

const ThemeSwitcher = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext)


    // Click handler

    const handleClick = () => {
        toggleTheme()
    }
    

    return (
        <Styled.Wrapper>
            <Styled.Button className={props.inverted ? "inverted hideUnderline" : "hideUnderline"} onClick={() => handleClick()}>
                {theme === "light" ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8z" /><path d="M15 9a1 1 0 110-2 1 1 0 010 2zM1 9a1 1 0 110-2 1 1 0 010 2zM13.657 3.758a1 1 0 11-1.414-1.415 1 1 0 011.414 1.415zM3.757 13.657a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zM9 1a1 1 0 11-2 0 1 1 0 012 0zM9 15a1 1 0 11-2 0 1 1 0 012 0zM3.757 2.343a1 1 0 11-1.414 1.414 1 1 0 011.414-1.414zM13.657 12.243a1 1 0 11-1.414 1.414 1 1 0 011.414-1.414z" /></svg>

                :
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 9.718A8.103 8.103 0 016.282 0 8.103 8.103 0 1016 9.718z"/></svg>
                }
            </Styled.Button>
        </Styled.Wrapper>
    )
}

export default ThemeSwitcher
