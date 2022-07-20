import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { Dark, Light } from '../styles/theme'
import { getCookie, setCookie } from 'cookies-next'

export default function MyApp(props) {
  const { Component, pageProps } = props
  const [theme, setTheme] = useState(JSON.parse(props.themeCtx.toString()))

  const toggleTheme = () => {
    setTheme(theme.title === 'Dark' ? Light : Dark)
    setCookie('theme', theme.title === 'Dark' ? Light : Dark, { maxAge: 60 * 6 * 24 })
  }

  return (
    <ThemeProvider theme={theme}>
      <Component toggleTheme={toggleTheme} {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = ({ ctx }) => ({ themeCtx: getCookie('theme', ctx) || JSON.stringify(Dark) })
