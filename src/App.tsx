import React from 'react'
import { ThemeProvider } from 'styled-components'

import './App.scss'
import theme from 'theme/theme'

import { ProductsProvider } from 'context'

import { LayoutView } from 'componentView'

function App() {
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

export default App
