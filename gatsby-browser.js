import React from 'react'
import GlobalContextProvider from './src/context/GlobalContextProvider'
import GlobalStylesDiv from './src/global_styles/globalStyledComponents'

import "./src/global_styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>
    <GlobalStylesDiv>
      {element}
    </GlobalStylesDiv>
  </GlobalContextProvider>
}


