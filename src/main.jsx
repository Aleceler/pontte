import React from 'react'
import { ThemeProvider }from 'styled-components'
import GlobalStyles, { theme } from '../GlobalStyles'
import Simulator from './views/Simulator'


const Main = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Simulator>Main</Simulator>
            </ThemeProvider>
        </>
    )
}

export default Main