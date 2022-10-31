import * as React from "react"
import { useContext } from "react";

import styled from "styled-components";

import {
  GlobalSettingsContext,
} from "../context/GlobalContextProvider";

// Lesson: Wrapping gatsby with a styled component 
// Lesson: had to put styled components inside component function to be able to access useContext


const GlobalStylesDiv = ({ children }) => {
  const settings = useContext(GlobalSettingsContext)

  // Convert hex to hsl and grab the hue
  // could use color picker to get hue then apply that to the background
  // https://stackoverflow.com/questions/3732046/how-do-you-get-the-hue-of-a-xxxxxx-colour
  // lesson: hex has alpha https://davidwalsh.name/hex-opacity
  const GlobalStyleWrapper = styled.div`
  /* starting hues */
  --general-mwr-hue: 111;
  --safety-mwr-hue: 2;
  --urgent-mwr-hue: 52;

/* hex convert to hsl: https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript */
  /* colors based on hues */
  --background-general: ${settings.mwrTypes[0].color};
  --background-urgent: ${settings.mwrTypes[1].color};
  --background-safety: ${settings.mwrTypes[2].color};

  /* btns, hovers, colors based on mwr colors */
  /* B3 = 70% opacity */
  --btn-background-based-on-general:${settings.mwrTypes[0].color + "B3"};
  
  `
  return (
    <GlobalStyleWrapper>
      {children}
      {/* {mwrTypeColors()} */}
    </GlobalStyleWrapper>
  )

}




export default GlobalStylesDiv