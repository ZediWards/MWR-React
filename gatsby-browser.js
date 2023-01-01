import React from 'react'

// Wrap the require in check for window
const GlobalContextProvider = require("./src/context/GlobalContextProvider")

const GlobalStylesDiv = require("./src/global_styles/globalStyledComponents")

// import GlobalContextProvider from './src/context/GlobalContextProvider'
// import GlobalStylesDiv from './src/global_styles/globalStyledComponents'

import "./src/global_styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>
    <GlobalStylesDiv>
      {element}
    </GlobalStylesDiv>
  </GlobalContextProvider>
}


