const React = require("react")
const GlobalContextProvider = require("./src/context/GlobalContextProvider").default
const GlobalStylesDiv = require("./src/global_styles/globalStyledComponents").default

// LESSON: matching ssr file with browser file seemed to fix the build error of index page failing b/c of settings.mwr undefined
exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>
    <GlobalStylesDiv>
      {element}
    </GlobalStylesDiv>
  </GlobalContextProvider>
}

