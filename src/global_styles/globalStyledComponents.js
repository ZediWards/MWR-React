// import * as React from "react"
// import { useContext } from "react";

// import styled from "styled-components";

// import {
//   GlobalSettingsContext,
// } from "../context/GlobalContextProvider";

// // Lesson: Wrapping gatsby with a styled component 
// // **** Styled Components ****




// const GlobalStyleWrapper = styled.div`
//   /* starting hues */
//   --general-mwr-hue: 111;
//   --safety-mwr-hue: 2;
//   --urgent-mwr-hue: 52;

// /* hex convert to hsl: https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript */
//   /* colors based on hues */
//   --background-general: hsl(var(--general-mwr-hue), 50%, 85%);
//   --background-safety: hsl(var(--safety-mwr-hue), 50%, 85%);
//   --background-urgent: hsl(var(--urgent-mwr-hue), 50%, 85%);

//   --background-general: ${mwrTypeColors};
  
//   `
// const color1 = settings.mwrTypes[0].color
// const mwrTypeColor1 = (color1) => {
//   if (color1 === ) {

//   }
// }
// // background-color: ${(prop) =>
// //   prop.mwrType.type === settings.mwrTypes[0]
// //     ? "var(--background-general)"
// //     : prop.mwrType.type === "Safety"
// //       ? "var(--background-safety)"
// //       : "var(--background-urgent)"};
// // `;

// const GlobalStylesDiv = ({ children }) => {
//   const settings = useContext(GlobalSettingsContext)
//   const mwrTypeColors = (settings) => {
//     switch ("dfa") {
//       // update settings section
//       case settings.mwrTypes[0].type: {
//         if (settings.mwrTypes[0].color === "#00ff24")
//           break;
//       }
//       // console.log(settings)
//     }
//     return (
//       <GlobalStyleWrapper>
//         {children}
//         {mwrTypeColors()}
//       </GlobalStyleWrapper>
//     )

//   }
// }



// export default GlobalStylesDiv