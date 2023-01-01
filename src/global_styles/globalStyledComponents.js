import * as React from "react"
import { useContext } from "react";

import styled from "styled-components";

import {
  GlobalSettingsContext, GlobalThemeContext
} from "../context/GlobalContextProvider";

// Lesson: Wrapping gatsby with a styled component 
// Lesson: had to put styled components inside component function to be able to access useContext


const GlobalStylesDiv = ({ children }) => {
  const settings = useContext(GlobalSettingsContext)
  const theme = useContext(GlobalThemeContext)

  // https://stackoverflow.com/questions/3732046/how-do-you-get-the-hue-of-a-xxxxxx-colour
  // lesson: hex has alpha https://davidwalsh.name/hex-opacity


  const GlobalStyleWrapper = styled.div`
/* hex convert to hsl: https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript */
  /* colors based on hues */
  --background-general: ${settings.mwrTypes[0].color};
  --background-urgent: ${settings.mwrTypes[1].color};
  --background-safety: ${settings.mwrTypes[2].color};


  /* lesson: transparincy added to hex valueB3 = 70% opacity */
  /* --btn-background-based-on-general:${settings.mwrTypes[0].color + "B3"}; */
  
  /* btns, hovers, colors based on mwr colors */
  --text-black: ${theme.fontColor};
  /* --light-background: ${theme.lightBackground}; */

  `
  return (
    <GlobalStyleWrapper>
      {children}
      {/* {mwrTypeColors()} */}
    </GlobalStyleWrapper>
  )

}




export default GlobalStylesDiv