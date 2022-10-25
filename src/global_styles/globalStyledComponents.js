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
  const GlobalStyleWrapper = styled.div`
  /* starting hues */
  --general-mwr-hue: 111;
  --safety-mwr-hue: 2;
  --urgent-mwr-hue: 52;

/* hex convert to hsl: https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript */
  /* colors based on hues */
  /* --background-general: hsl(var(--general-mwr-hue), 50%, 85%); */
  --background-general: ${settings.mwrTypes[0].color};

  /* --background-urgent: hsl(var(--urgent-mwr-hue), 50%, 85%); */
  --background-urgent: ${settings.mwrTypes[1].color};

  /* --background-safety: hsl(var(--safety-mwr-hue), 50%, 85%); */
  --background-safety: ${settings.mwrTypes[2].color}
  
  `
  return (
    <GlobalStyleWrapper>
      {children}
      {/* {mwrTypeColors()} */}
    </GlobalStyleWrapper>
  )

}




export default GlobalStylesDiv