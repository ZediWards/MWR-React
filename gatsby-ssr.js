const React = require("react")
const GlobalContextProvider = require("./src/context/GlobalContextProvider").default
const GlobalStylesDiv = require("./src/global_styles/globalStyledComponents").default


exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>
    <GlobalStylesDiv>
      {element}
    </GlobalStylesDiv>
  </GlobalContextProvider>
}

