import * as React from "react"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        padding: "0rem 3rem 0rem 3rem",
        margin: "auto"
        // border: "solid 1px red"
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
