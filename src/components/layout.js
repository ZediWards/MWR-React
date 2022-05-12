import * as React from "react"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

// some sort of css reset file
import "../css_global/layout.css"

const PageContainer = styled.div`
  min-height: 100vh;
  maxWidth: 1600px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0rem 3rem 0rem 3rem;
  margin: auto;
  /* border: solid 1px red; */
`

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  )
}

export default Layout
