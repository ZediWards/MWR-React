import * as React from "react"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

// some sort of css reset file
import "../css_global/layout.css"

const PageContainer = styled.div`
  min-height: 100vh;
  max-width: 1600px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0rem 3rem 0rem 3rem;
  margin: auto;
  border: solid 1px red;
  /* overflow: scroll; */
  @media (max-width: 888px) {
    padding: 0rem 1rem 0rem 1rem;
  }
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
