import React from "react";
import { useState } from "react";

// export const [settings, settingsDispatch] = React.useReducer(reducer, generalSettings)
const generalSettings = {
  mwrTypes: [
    { type: "general", color: "green" },
    { type: "urgent", color: "yellow" },
    { type: "safety", color: "red" }
  ],
  departments: ["compounding", "production 1", "production 2", "warehouse"],
  status: ["assigned", "unassigned", "completed", "denied"],
  problemType: ["electrical", "plumbing", "machine"],
  maintenenceDepartments: ["building maintenence", "general maintenence"],
  buildingMainteneceEmployees: ["Tod"],
  generalMaintenenceEmployees: ["Bob", "John"]
};

// actions for our dispatch
export const ACTIONS = {
  NEW_MWR: "new", //works
  UPDATE_MWR: "update", //works
  DELETE_MWR: "delete"
};

function reducer(state, action) {
  switch (action.type) {
    // add new mwr "handleClick"
    // [?] works
    case ACTIONS.NEW_MWR: {
      return [...state, action.payload];
    }
    // update mwr ""
    // [?] works
    case ACTIONS.UPDATE_MWR: {
      const updatedState = state.map((item) => {
        if (item.id === action.payload.id) {
          // overriding the item with the new data
          return action.payload;
        }
        // if not the item we are looking for we return unchanged item
        return item;
      });
      // can I just return updated state?, does initialState need to be "let"?
      state = updatedState;
      return state;
    }
    // delete mwr
    // [?] works - need to make delete button with dispatch function onClick
    case ACTIONS.DELETE_MWR: {
      return state.filter((mwr) => mwr.id !== action.payload.id);
    }
    default:
      throw new Error("Bad Action Type");
    // or return original state
    // default:
    // return state
  }
}

// wrapping state and reducer providers with GlobalContextProvider, which will wrap Gatsby
// const SettingsProvider = ({ children }) => {
//   const [settings, settingsDispatch] = React.useReducer(reducer, generalSettings)
//   return (
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   );
// };

// export default GlobalContextProvider;

export const SettingsContext = React.createContext(generalSettings);
export const SettingsDispatchContext = React.createContext(reducer);
