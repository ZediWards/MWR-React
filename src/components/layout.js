import * as React from "react"
import { useContext } from "react"
import styled from "styled-components"

import {
  GlobalDispatchContext, GlobalStateContext
} from "../context/GlobalContextProvider"

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
  overflow: scroll;
  @media (max-width: 888px) {
    padding: 0rem 1rem 0rem 1rem;
  }
`

const Layout = ({ children }) => {

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(state)
  console.log(dispatch)

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
