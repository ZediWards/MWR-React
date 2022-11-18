import React, { useEffect } from "react";
import { useState } from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();
export const GlobalSettingsContext = React.createContext();
export const GlobalSettingsDispatchContext = React.createContext();
export const GlobalThemeContext = React.createContext();
export const GlobalThemeDispatchContext = React.createContext();

const themeSettings = {
  fontColor: "hsl(0, 0%, 18%)", //all but modals and pdf
  // lightBackground: "hsl(0, 0%, 99%)",
  // lightBackground: "purple",

  // lightBackground: "red",

  // fontColor: "pink",

  // secondaryFontColor
};

const generalSettings = {
  companyName: ["Test Company"],
  mwrTypes: [
    { type: "General", color: "hsl(111, 50%, 85%)" },
    { type: "Urgent", color: "hsl(52, 50%, 85%)" },
    { type: "Safety", color: "hsl(2, 50%, 85%)" },
  ],
  departments: ["compounding", "production 1", "production 2", "warehouse"],
  status: ["unassigned", "assigned", "completed", "denied"],
  problemType: ["electrical", "plumbing", "machine"],
  maintenenceDepartments: ["Building Maintenence", "General Maintenence"],
  buildingMainteneceEmployees: ["Tod"],
  generalMaintenenceEmployees: ["Bob", "John", "Paul"],
};

const initialState = [
  {
    id: 1,
    // Employee section
    type: "general",
    date: "2022-11-12",
    name: "Jane Doe",
    department: "compounding",
    problem: "The pump in the corner of the trench is not working properly",
    solution: "Seems like it is related to the air side of the pump.",
    // Maininence Section
    status: "assigned",
    workOrderNum: "001",
    workOrderDate: "2022-11-21",
    workOrderTime: "12:00",
    projectNum: "007",
    scheduledDate: "2022-11-22",
    // needs applied to all
    openHistory: "",
    problemType: "plumbing",
    //
    daysToCOmplete: "1",
    completedDate: "2022-11-22",
    //
    dueDate: "2022-11-25",
    estHours: "3",
    assetId: "123",
    assetDescription: "Trench pump",
    downtime: "0",
    actHours: "2",
    //
    site: "Compounding trench",
    //
    requestNum: "1",
    requestedByEmail: "janeDoe@tesing.com",
    //
    assignTo: "Building Maintenence",
    assistant: "",
    maintenanceTeamMember: "Tod",
    //
    briefDiscription:
      "The shaft on the sir side of the diaphragm pump was broken. Replace with spare.",
    workDiscription: "Replaced broken part. Pumps works now.",
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
      commentSix: "",
    },
  },
  // {
  //   id: 2,
  //   // Employee section
  //   type: "general",
  //   date: "2021-11-12",
  //   name: "Jon Doe",
  //   department: "compounding",
  //   problem: "details test",
  //   solution: "fix it",
  //   // Maininence Section
  //   status: "unassigned",
  //   workOrderNum: "001",
  //   workOrderDate: "2021-11-21",
  //   workOrderTime: "12:00",
  //   projectNum: "007",
  //   scheduledDate: "2021-11-22",
  //   // needs applied to all
  //   openHistory: "",
  //   problemType: "electrical",
  //   //
  //   daysToCOmplete: "",
  //   completedDate: "",
  //   //
  //   dueDate: "2022-07-07",
  //   estHours: "2",
  //   assetId: "123",
  //   assetDescription: "a switch!",
  //   downtime: "1",
  //   actHours: "3",
  //   //
  //   site: "light switch",
  //   //
  //   requestNum: "",
  //   requestedByEmail: "test@tesing.com",
  //   //
  //   assignTo: "Production Maintenance",
  //   assistant: "Bob",
  //   maintenanceTeamMember: "Jon",
  //   //
  //   briefDiscription:
  //     "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
  //   workDiscription:
  //     "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
  //   //
  //   // left
  //   comments: "",
  //   //
  //   // full (left through right)
  //   employeeComments: {
  //     commentOne: "",
  //     commentTwo: "",
  //     commentThree: "",
  //     commentsFive: "",
  //     commentSix: ""
  //   }
  // },
  // {
  //   id: 3,
  //   // Employee section
  //   type: "general",
  //   date: "2021-11-12",
  //   name: "Jon Doe",
  //   department: "compounding",
  //   problem: "details test",
  //   solution: "fix it",
  //   // Maininence Section
  //   status: "completed",
  //   workOrderNum: "001",
  //   workOrderDate: "2021-11-21",
  //   workOrderTime: "12:00",
  //   projectNum: "007",
  //   scheduledDate: "2021-11-22",
  //   // needs applied to all
  //   openHistory: "",
  //   problemType: "electrical",
  //   //
  //   daysToCOmplete: "",
  //   completedDate: "",
  //   //
  //   dueDate: "2022-07-07",
  //   estHours: "2",
  //   assetId: "123",
  //   assetDescription: "a switch!",
  //   downtime: "1",
  //   actHours: "3",
  //   //
  //   site: "light switch",
  //   //
  //   requestNum: "",
  //   requestedByEmail: "test@tesing.com",
  //   //
  //   assignTo: "Production Maintenance",
  //   assistant: "Bob",
  //   maintenanceTeamMember: "Jon",
  //   //
  //   briefDiscription:
  //     "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
  //   workDiscription:
  //     "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
  //   //
  //   // left
  //   comments: "",
  //   //
  //   // full (left through right)
  //   employeeComments: {
  //     commentOne: "",
  //     commentTwo: "",
  //     commentThree: "",
  //     commentsFive: "",
  //     commentSix: ""
  //   }
  // }
];
// actions for our dispatch
export const ACTIONS = {
  // mwr actions
  NEW_MWR: "new", //works
  UPDATE_MWR: "update", //works
  DELETE_MWR: "delete",
  // settings actions
  UPDATE_SETTINGS_SECTION: "update_settings",
};

// *** payload is an object that takesin any variable values needed to perfom the action.
// "dispatch" reducer function
// will end up passing dispatch function to whatever component needs it (like formData state)

//*************? MWR REDUCER FUNCTION *****************/
function reducer(state, action) {
  switch (action.type) {
    // add new mwr "handleClick"
    case ACTIONS.NEW_MWR: {
      return [...state, action.payload];
    }
    // update mwr ""
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

// *******? SETTINGS REDUCER FUNCTION ************
// todo: update, delete, add. delete and add might be frontend and save just updates all changes
function settingsReducer(state, action) {
  switch (action.type) {
    // update settings section
    case ACTIONS.UPDATE_SETTINGS_SECTION: {
      console.log("DISPATCH FIRED!!!!!!");
      return {
        ...state,
        [action.payload.section]: action.payload.data,
      };
    }

    // case ACTIONS.DELETE_MWR: {
    //   return state.filter((mwr) => mwr.id !== action.payload.id);
    // }
    default:
      throw new Error("Bad Action Type");
    // or return original state
    // default:
    // return state
  }
}

// *******? THEME REDUCER FUNCTION ************
function themeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_THEME: {
      console.log("UPDATING THEME");
      // return {

      // }
    }
  }
}

// wrapping state and reducer providers with GlobalContextProvider, which will wrap Gatsby
// I think state needs to start as an empty array
const GlobalContextProvider = ({ children }) => {
  // Theme settings
  const [theme, themeDispatch] = React.useReducer(themeReducer, themeSettings);
  // initial state & local storage
  const [state, dispatch] = React.useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem("state");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  // settings & Local Storage
  const [settingsState, settingsDispatch] = React.useReducer(
    settingsReducer,
    generalSettings,
    () => {
      const localSettings = localStorage.getItem("settingsState");
      return localSettings ? JSON.parse(localSettings) : generalSettings;
    }
  );
  useEffect(() => {
    localStorage.setItem("settingsState", JSON.stringify(settingsState));
  }, [settingsState]);
  return (
    <GlobalThemeContext.Provider value={theme}>
      <GlobalStateContext.Provider value={state}>
        <GlobalSettingsContext.Provider value={settingsState}>
          <GlobalThemeDispatchContext.Provider value={themeDispatch}>
            <GlobalDispatchContext.Provider value={dispatch}>
              <GlobalSettingsDispatchContext.Provider value={settingsDispatch}>
                {children}
              </GlobalSettingsDispatchContext.Provider>
            </GlobalDispatchContext.Provider>
          </GlobalThemeDispatchContext.Provider>
        </GlobalSettingsContext.Provider>
      </GlobalStateContext.Provider>
    </GlobalThemeContext.Provider>
  );
};

export default GlobalContextProvider;
