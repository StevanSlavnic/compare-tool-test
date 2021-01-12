import React from 'react'

import { Header, Footer } from 'components'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
