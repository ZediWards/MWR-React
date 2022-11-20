import * as React from "react"
import { useContext } from "react"
import styled from "styled-components"


import Header from "./header"
import Footer from "./footer"

import "../css_global/layout.css"

// **** Styled Components ****
const LayoutDiv = styled.div`
  min-height: 100vh;
  max-width: 1600px;
  display: "grid";
  grid-template-rows: auto 1fr auto;
  padding: 0rem 3rem 0rem 3rem;
  margin: auto;
  overflow: hidden;
  /* lesson: overflow hidden takes care of double scroll bar */
  background-color: var(--light-background) ;
  @media (max-width: 888px) {
    padding: 0rem 1rem 0rem 1rem;
  }
`

const Layout = ({ children }) => {


  return (
    <LayoutDiv>
      {/* <p>{state[0].type}</p> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutDiv>
  )
}

export default Layout
