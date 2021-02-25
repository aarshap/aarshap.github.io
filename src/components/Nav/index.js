import React, { useContext, useRef, useState } from "react"
import * as Styled from "./styled"
import { Link } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { NavContext } from "../../contexts/NavContext"
import { Fade } from "../Animations"
import { useMediaQuery } from "@react-hook/media-query"
import EmailLink from "../EmailLink"
import Logo from "../Logo"
import NavMenu from "../NavMenu"
import ThemeSwitcher from "../ThemeSwitcher"

export default () => {

    // Nav color scheme context

    const { pageNavScheme, visibleNavScheme, updateVisibleNavScheme } = useContext(NavContext)

    // Media query hook used to adjust visible nav items

    const isDesktop = useMediaQuery("(min-width: 800px)")

    // Menu state

    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle menu visibility

    const hideMenu = () => {
        setMenuOpen(false)
        setTimeout(() => {
            updateVisibleNavScheme(pageNavScheme.invertLeft, pageNavScheme.invertRight)
        }, 300)    
}

    const showMenu = () => {
        setMenuOpen(true)
        setTimeout(() => {
            updateVisibleNavScheme(true, true)
        }, 200)    
    }

    const toggleMenu = () => {
        menuOpen ? hideMenu() : showMenu()
    }

    // Ref passed to NavMenu component used to listen for clicks outside of the Nav component

    const navRef = useRef()

    return (
        <>
            <Styled.Wrapper ref={navRef}>
                <Styled.Left>
                    <Fade delay={0.5}>
                        <Link className={visibleNavScheme.invertLeft ? "inverted hideUnderline" : "hideUnderline"} onClick={() => hideMenu()} to="/">
                            <Logo />
                        </Link>
                    </Fade>
                </Styled.Left>
                <Styled.Right>
                    <h6>
                        <Fade delay={0.5}>
                            <button className={visibleNavScheme.invertRight && "inverted"} onClick={() => toggleMenu()}>Work</button>
                        </Fade>
                    </h6>
                    <h6>
                        <Fade delay={0.5}>
                            <Link className={visibleNavScheme.invertRight && "inverted"} onClick={() => hideMenu()} to="/info">Info</Link>
                        </Fade>
                    </h6>
                    {isDesktop &&
                        <h6>
                            <Fade delay={0.5}>
                                <a className={visibleNavScheme.invertRight && "inverted"} href="https://twitter.com/aaronshapiro">Twitter</a>
                            </Fade>
                        </h6>
                    }
                    <h6>
                        <Fade delay={0.5}>
                            <EmailLink inverted={visibleNavScheme.invertRight && true} />
                        </Fade>
                    </h6>
                    <div>
                        <Fade delay={0.5}>
                            <ThemeSwitcher inverted={visibleNavScheme.invertRight && "true"} />
                        </Fade>
                    </div>
                </Styled.Right>
            </Styled.Wrapper>
            <AnimatePresence>
                { menuOpen && <NavMenu menuOpen={menuOpen} hideMenu={hideMenu} navRef={navRef}/> }
            </AnimatePresence>
        </>
    
    )
}