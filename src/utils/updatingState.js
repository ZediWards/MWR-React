import * as React from "react"


// *********************************************
// adds object to db state
// const handleClick = formData => {
//   // example of adding item to the state array
//   setDb([...db, formData])
// }

//  generalized
export const addNewFormDataToState = (formData, state, setter) => {
  // example of adding item to the state array
  setter([...state, formData])
}

// ********************************************

// ********************************************

// updates an object already in db state
// const handleUpdate = (mwrData, mwrIndex) => {
//   // logging correct item
//   const updatedDb = db.map(item => {
//     if (item.id === mwrData.id) {
//       return mwrData
//     }
//     return item
//   })
//   setDb([...updatedDb])
// }

// generalized
export const updateStateObject = (updatedData, state, setter) => {
  // creating new [] with the updated {}
  const updatedDb = state.map(item => {
    if (item.id === updatedData.id) {
      return updatedData
    }
    return item
  })
  setter([...updatedDb])
}

  // *******************************************