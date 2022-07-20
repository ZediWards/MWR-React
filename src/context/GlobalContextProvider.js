import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = [{
  id: 1,
  // Employee section
  type: "context & reducer",
  date: "2021-11-12",
  name: "Jon Doe",
  department: "Context Test"
}]

// actions for our dispatch 
export const ACTIONS = {
  NEWMWR: 'new',
  UPDATEMWR: 'update',
  DELETEMWR: 'delete'
}

// *** payload is an object that takesin any variable values needed to perfom the action. 
// "dispatch" reducer function
// will end up passing dispatch function to whatever component needs it (like formData state)
function reducer(state, action) {
  switch (action.type) {
    // add new mwr "handleClick"
    // [] works
    case ACTIONS.NEWMWR: {
      return [...state, action.payload.formData]
    }
    // update mwr ""
    case ACTIONS.UPDATEMWR: {
      return {}
    }
    // delete mwr
    case ACTIONS.DELETEMWR: {
      return state.filter(mwr => mwr.id !== action.payload.id)
    }
    default:
      throw new Error("Bad Action Type")
    // or return original state
    // default:
    // return state
  }
}

// wrapping state and reducer providers with GlobalContextProvider, which will wrap Gatsby
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider