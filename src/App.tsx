import React from 'react'
import { ThemeProvider } from 'styled-components'

import './App.css'
import theme from 'theme/theme'

import ProductsProvider from 'context/Products/ProductsProvider/ProductsProvider'

import { LayoutView } from 'componentView'

// import { ProductsList } from 'componentContainer'

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
