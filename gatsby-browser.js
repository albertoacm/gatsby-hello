import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from './src/themes/theme'

const GlobalStyle = createGlobalStyle`
    * { 
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
    body, html {
        font-family: ${({props}) => props.theme.fonts.main};
        height: 100%;
        background-color: ${({props}) => props.theme.colors.light1};
    }
`

export const wrapRootTheme = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        { element }
    </ThemeProvider>
)

