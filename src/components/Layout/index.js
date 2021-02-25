import React from "react"
import * as Styled from "./styled"
import { AnimatePresence, motion } from "framer-motion"
import { NavContextProvider } from "../../contexts/NavContext"
import { ThemeContextProvider } from "../../contexts/ThemeContext"
import Footer from "../Footer"
import GlobalStyles from "../../styles/GlobalStyles"
import Nav from "../Nav"
import PageTransition from "../PageTransition"
import Theme from "../Theme"

const duration = 0.5

const variants = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.5
    },
  },
}

export default ({ children, location }) => {
    return (
        <>
            <ThemeContextProvider>
                <NavContextProvider>
                    <Theme>
                        <GlobalStyles />
                        <Styled.Wrapper>
                            <Nav />
                            <AnimatePresence exitBeforeEnter>
                                <motion.main
                                    key={location.pathname}
                                    variants={variants}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <PageTransition />
                                    {children}
                                    <Footer />
                                </motion.main>
                            </AnimatePresence>
                        </Styled.Wrapper>
                    </Theme>
                </NavContextProvider>
            </ThemeContextProvider>
        </>
    )
}