import React from "react";
import { useState } from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();
export const GlobalSettingsContext = React.createContext();
export const GlobalSettingsDispatchContext = React.createContext();

const generalSettings = {
  mwrTypes: [
    { type: "general", color: "green" },
    { type: "urgent", color: "yellow" },
    { type: "safety", color: "red" },
    { type: "TESTING", color: "red" }
  ],
  departments: [
    "compounding",
    "production 1",
    "production 2",
    "warehouse",
    "TESTING"
  ],
  status: ["unassigned", "assigned", "completed", "denied", "TESTING"],
  problemType: ["electrical", "plumbing", "machine", "TESTING"],
  maintenenceDepartments: [
    "Building Maintenence",
    "General Maintenence",
    "TESTING"
  ],
  buildingMainteneceEmployees: ["Tod"],
  generalMaintenenceEmployees: ["Bob", "John", "TESTING"]
};

const initialState = [
  {
    id: 1,
    // Employee section
    type: "general",
    date: "2021-11-12",
    name: "Jane Doe TESTING",
    department: "compounding",
    problem: "details test",
    solution: "fix it",
    // Maininence Section
    status: "assigned",
    workOrderNum: "001",
    workOrderDate: "2021-11-21",
    workOrderTime: "12:00",
    projectNum: "007",
    scheduledDate: "2021-11-22",
    // needs applied to all
    openHistory: "",
    problemType: "electrical",
    //
    daysToCOmplete: "",
    completedDate: "",
    //
    dueDate: "2022-07-07",
    estHours: "2",
    assetId: "123",
    assetDescription: "a switch!",
    downtime: "1",
    actHours: "3",
    //
    site: "light switch",
    //
    requestNum: "",
    requestedByEmail: "test@tesing.com",
    //
    assignTo: "Production Maintenance",
    assistant: "Bob",
    maintenanceTeamMember: "Jon",
    //
    briefDiscription:
      "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",

    workDiscription:
      "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
    //
    // left
    comments: "",
    //
    // full (left through right)
    employeeComments: {
      commentOne: "",
      commentTwo: "",
      commentThree: "",
      commentsFive: "",
      commentSix: ""
    }
  },
  {
    id: 2,
    // Employee section
    type: "general",
    date: "2021-11-12",
    name: "Jon Doe",
    department: "compounding",
    problem: "details test",
    solution: "fix it",
    // Maininence Section
    status: "unassigned",
    workOrderNum: "001",
    workOrderDate: "2021-11-21",
    workOrderTime: "12:00",
    projectNum: "007",
    scheduledDate: "2021-11-22",
    // needs applied to all
    openHistory: "",
    problemType: "electrical",
    //
    daysToCOmplete: "",
    completedDate: "",
    //
    dueDate: "2022-07-07",
    estHours: "2",
    assetId: "123",
    assetDescription: "a switch!",
    downtime: "1",
    actHours: "3",
    //
    site: "light switch",
    //
    requestNum: "",
    requestedByEmail: "test@tesing.com",
    //
    assignTo: "Production Maintenance",
    assistant: "Bob",
    maintenanceTeamMember: "Jon",
    //
    briefDiscription:
      "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",

    workDiscription:
      "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
    //
    // left
    comments: "",
    //
    // full (left through right)
    employeeComments: {
      commentOne: "",
      commentTwo: "",
      commentThree: "",
      commentsFive: "",
      commentSix: ""
    }
  },
  {
    id: 3,
    // Employee section
    type: "general",
    date: "2021-11-12",
    name: "Jon Doe",
    department: "compounding",
    problem: "details test",
    solution: "fix it",
    // Maininence Section
    status: "completed",
    workOrderNum: "001",
    workOrderDate: "2021-11-21",
    workOrderTime: "12:00",
    projectNum: "007",
    scheduledDate: "2021-11-22",
    // needs applied to all
    openHistory: "",
    problemType: "electrical",
    //
    daysToCOmplete: "",
    completedDate: "",
    //
    dueDate: "2022-07-07",
    estHours: "2",
    assetId: "123",
    assetDescription: "a switch!",
    downtime: "1",
    actHours: "3",
    //
    site: "light switch",
    //
    requestNum: "",
    requestedByEmail: "test@tesing.com",
    //
    assignTo: "Production Maintenance",
    assistant: "Bob",
    maintenanceTeamMember: "Jon",
    //
    briefDiscription:
      "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",

    workDiscription:
      "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
    //
    // left
    comments: "",
    //
    // full (left through right)
    employeeComments: {
      commentOne: "",
      commentTwo: "",
      commentThree: "",
      commentsFive: "",
      commentSix: ""
    }
  }
];
// actions for our dispatch
export const ACTIONS = {
  NEW_MWR: "new", //works
  UPDATE_MWR: "update", //works
  DELETE_MWR: "delete"
};

// *** payload is an object that takesin any variable values needed to perfom the action.
// "dispatch" reducer function
// will end up passing dispatch function to whatever component needs it (like formData state)
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
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [settingsState, settingsDispatch] = React.useReducer(
    reducer,
    generalSettings
  );
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalSettingsContext.Provider value={settingsState}>
        <GlobalDispatchContext.Provider value={dispatch}>
          <GlobalSettingsDispatchContext.Provider value={settingsDispatch}>
            {children}
          </GlobalSettingsDispatchContext.Provider>
        </GlobalDispatchContext.Provider>
      </GlobalSettingsContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
