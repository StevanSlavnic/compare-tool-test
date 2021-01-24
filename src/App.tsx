/** @jsxRuntime classic */
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDom from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme/theme'
import './App.scss'

import { ProductsProvider } from 'context'

import { LayoutView } from 'componentView'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <LayoutView />
        </ProductsProvider>
      </ThemeProvider>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root') as HTMLElement)
