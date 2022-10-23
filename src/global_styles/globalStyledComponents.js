import * as React from "react"
import styled from "styled-components";

// Lesson: Wrapping gatsby with a styled component 
// **** Styled Components ****
const GlobalStyleWrapper = styled.div`
  --background-general: hsl(var(--general-mwr-hue), 50%, 85%);
  --background-safety: hsl(var(--safety-mwr-hue), 50%, 85%);
  --background-urgent: hsl(var(--urgent-mwr-hue), 50%, 85%);
  
  `


const GlobalStylesDiv = ({ children }) => (
  <GlobalStyleWrapper>
    {children}
  </GlobalStyleWrapper>
)

export default GlobalStylesDiv