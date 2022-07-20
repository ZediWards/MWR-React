import React from 'react'
import GlobalContextProvider from './src/context/GlobalContextProvider'

import "./src/global_styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}


