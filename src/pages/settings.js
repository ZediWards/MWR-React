import * as React from "react";
import { useState, useEffect, useContext } from "react";

import styled from "styled-components";
import { Link } from "gatsby";

import {
  GlobalSettingsContext,
  GlobalSettingsDispatchContext
} from "../context/GlobalContextProvider";
import { ACTIONS } from "../context/GlobalContextProvider";

import Layout from "../components/layout";

// ********* STYLES **************

const SettingsWrapperStyled = styled.div`
  border: 1px solid red;

  li {
    list-style: none;
    /* border: 1px solid blue; */
  }

  p {
    margin-block-end: 0;
  }

  .label {
    display: flex;
    flex-direction: row;
    margin-block-end: 1rem;
    gap: 1rem;
    /* border: 1px solid red; */
  }

  .item-controls-container {
    display: flex;
    gap: 1rem;
  }

  .category-header-container {
    display: flex;
    gap: 1rem;
    margin-block-end: 0;
  }

  .category-header {
    margin-block-end: 0;
  }

  .category-controls-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .control-btns {
    border: 1px solid threedlightshadow;
    border-radius: 10px;
    /* box-shadow: 0px 2px 1px var(--gray-light); */
    padding-inline: 1rem;
    cursor: pointer;
  }

  .control-btns:hover {
    background-color: hsl(var(--safety-mwr-hue), 50%, 90%);
  }

  .edit-btn {
  }

  .add-new-btn {
    /* display: none; */
  }

  .cancel-btn {
    /* display: none; */
  }

  .save-btn {
    /* display: none; */
  }

  /* --gray-light from global css need a primary-hue declared to work */
  .delete-btn {
    /* align-self: flex-start; */
    background-color: var(--background-safety);
    border: 1px solid var(--gray-light);
    box-shadow: 0px 2px 1px var(--gray-light);
    /* transition: all 0.35s ease-Out; */
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    /* will be visable upon edit btn being clicked */
    display: none;
  }

  /* TODO make hover into downClick */
  .delte-btn:hover {
    border: 1px solid var(--background-safety);
    background-color: var(--light-background);
  }

  .green {
    background-color: green;
  }

  .btn-visibile {
    /* background-color: blue; */
    display: block;
  }

  .display-none {
    display: none;
  }
`;

const SettingsPage = () => {
  // context variables
  const settings = useContext(GlobalSettingsContext);
  const settingsDispatch = useContext(GlobalSettingsDispatchContext);
  console.log("FROM SETTINGS PAGE");
  console.table(settings);

  // other variables
  const settingsKeys = Object.keys(settings);
  // copy of localStorage context
  const [updateSettings, setUpdateSettings] = useState({
    ...settings
  });

  //*************? Edit functionality **************/

  // TODO:
  // [x] edit: hide when clicked, show other btns
  // [x] cancel, save: hide all btns and show edit
  // [x] make delete btn display: none as well && inputs enabled at the right time
  // [ ] addNew: enable input for editing and delete btn visiable

  // Show Hide Function
  const showHideBtns = (e, btnType) => {
    // DOM variables
    const parentDiv = e.target.closest("div");
    const editBtn = parentDiv.querySelector(".edit-btn");
    const addNewBtn = parentDiv.querySelector(".add-new-btn");
    const cancelBtn = parentDiv.querySelector(".cancel-btn");
    const saveBtn = parentDiv.querySelector(".save-btn");

    const category = e.target.closest("li");
    const categoryList = category.querySelector("ul");
    const listItems = categoryList.children;

    switch (btnType) {
      // update settings section
      case "edit": {
        editBtn.className = "control-btns edit-btn display-none";
        addNewBtn.className = "control-btns add-new-btn";
        cancelBtn.className = "control-btns cancel-btn";
        saveBtn.className = "control-btns save-btn";

        // inputs and delete btns
        // display block on delete btn **all but mwr type**
        for (let listItem of listItems) {
          // console.log(listItem.children[0].children[0].disabled);

          let btnTarget = listItem.children[0].children[1].children[0];
          btnTarget.className !== "delete-btn btn-visibile"
            ? (btnTarget.className = "delete-btn btn-visibile")
            : (btnTarget.className = "delete-btn");

          // enable inputs for editing
          let inputTarget = listItem.children[0].children[0];
          inputTarget.disabled === true
            ? (inputTarget.disabled = false)
            : (inputTarget.disabled = true);

          // *** next step is to allow onChange event to change the settings context
        }
        break;
      }
      case "cancel":
      case "save":
        editBtn.className = "control-btns edit-btn";
        addNewBtn.className = "control-btns add-new-btn display-none";
        cancelBtn.className = "control-btns cancel-btn display-none";
        saveBtn.className = "control-btns save-btn display-none";

        // inputs and delete btns
        // display block on delete btn **all but mwr type**
        for (let listItem of listItems) {
          // console.log(listItem.children[0].children[0].disabled);
          // Don't really need terniary but am keeping for a reference
          let btnTarget = listItem.children[0].children[1].children[0];
          btnTarget.className !== "delete-btn"
            ? (btnTarget.className = "delete-btn")
            : (btnTarget.className = "delete-btn btn-visibile");

          // enable inputs for editing
          let inputTarget = listItem.children[0].children[0];
          inputTarget.disabled === false
            ? (inputTarget.disabled = true)
            : (inputTarget.disabled = false);

          // *** next step is to allow onChange event to change the settings context
        }
        break;

      // case ACTIONS.DELETE_MWR: {
      //   return state.filter((mwr) => mwr.id !== action.payload.id);
      // }
      default:
        throw new Error("Bad Action Type");
      // or return original state
      // default:
      // return state
    }
  };

  // enabling edit function
  const enableEdit = (e) => {
    // const category = e.target.closest("li");
    // const categoryList = category.querySelector("ul");
    // const listItems = categoryList.children;
    showHideBtns(e, "edit");

    // // display block on delete btn **all but mwr type**
    // for (let listItem of listItems) {
    //   // console.log(listItem.children[0].children[0].disabled);

    //   let btnTarget = listItem.children[0].children[1].children[0];
    //   btnTarget.className !== "delete-btn btn-visibile"
    //     ? (btnTarget.className = "delete-btn btn-visibile")
    //     : (btnTarget.className = "delete-btn");

    //   // enable inputs for editing
    //   let inputTarget = listItem.children[0].children[0];
    //   inputTarget.disabled === true
    //     ? (inputTarget.disabled = false)
    //     : (inputTarget.disabled = true);

    //   // *** next step is to allow onChange event to change the settings context
    // }
  };

  // condition ? value if true : value if false

  //***************? onChange Function **************************/
  const change = (e, item, index) => {
    const newArr = updateSettings[item].slice();
    newArr[index] = e.target.value;
    //! WORKS!!!!!!!!
    setUpdateSettings((current) => {
      return {
        ...current,
        [item]: newArr
      };
    });

    console.log(newArr);
    console.log({ ...updateSettings, [item]: newArr });
    // const generalSettings = {
    //   mwrTypes: [
    //     { type: "General", color: "green" },
    //     { type: "Urgent", color: "yellow" },
    //     { type: "Safety", color: "red" },
    //   ],
    //   departments: [
    //     "compounding",
    //     "production 1",
    //     "production 2",
    //     "warehouse",
    //     // "TESTING"
    //   ],

    // NOTES from trying to figure out how to make worke
    // console.log(item) //department
    // console.log(typeof (item))  // string
    // console.log(index)  // 0
    // console.log(typeof (index))  // number
    // // console.log(updateSettings[item][index] = "flub") //compounding
    // console.log(updateSettings[item]) // departments array
    //  books.splice(2, 1, 'JavaScript
    // console.log({ ...updateSettings, [item]: [...updateSettings[item], updateSettings[item][index] = e.target.value] })

    // ...updateSettings, [item]: updateSettings[item]
    // ...updateSettings, [item]: [...updateSettings[item], [index] = e.target.value]

    // way 1
    // setUpdateSettings(current => {
    //   return {
    //     ...current,
    //     [item]: {
    //       ...current[item],
    //       [index]: e.target.value
    //     }
    //   }
    // })

    // way 2
    // setUpdateSettings(current => {
    //   item = { ...current[item] }

    //   [item][index] = e.target.value

    //   return { ...current, item }
    // })

    // department.index

    // let testing = updateSettings[item]

    // setUpdateSettings({ ...updateSettings, ...testing, [index]: e.target.value }
    // setUpdateSettings({ ...updateSettings, [item]: e.target.value }

    // )
  };

  //***************? Delete Function **************************/
  //! WORKS
  const remove = (e, item, index) => {
    e.stopPropagation();
    const filtered = updateSettings[item].filter((value) => {
      // [index] refers to parameter passed into remove()
      return value !== updateSettings[item][index];
    });
    setUpdateSettings((current) => {
      return {
        ...current,
        [item]: filtered
      };
    });
  };

  //***************? Add New List Item Function **************************/
  // !WORKS... bugs though
  // bug: delete btn gets out of sync with others if adding while edit is clicked
  // mwrTypes: push an template object into the array of objects
  const addItem = (e, item) => {
    e.stopPropagation();
    const newArr = updateSettings[item].slice();
    newArr.push("");
    setUpdateSettings((current) => {
      return {
        ...current,
        [item]: newArr
      };
    });
    console.log(updateSettings[item]);
  };

  //***************? Cancel Changes Function **************************/
  //! WORKS
  const cancelChanges = (e, item) => {
    e.stopPropagation();
    showHideBtns(e, "cancel");

    const newArr = settings[item].slice();
    console.table(newArr);
    setUpdateSettings((current) => {
      return {
        ...current,
        [item]: newArr
      };
    });
  };
  //***************? Save to Context Local Storage Function **************************/
  const saveSection = (e, item) => {
    e.preventDefault();
    showHideBtns(e, "save");

    const newArr = updateSettings[item].slice();
    const updatedSettings = {
      section: item,
      data: newArr
    };
    console.log("overriding context local storage");
    console.log(updatedSettings); //payload
    // settingsDispatch({ type: ACTIONS.UPDATE_SETTINGS, payload: updateSettings });
    settingsDispatch({
      type: ACTIONS.UPDATE_SETTINGS_SECTION,
      payload: updatedSettings
    });
  };

  //? *********** Mapping JSX **********************

  // mapping mwrType separate b/c array of objects
  const mwrTypeSettingsMap = updateSettings.mwrTypes.map((item, index) => {
    return (
      <li key={index}>
        <label htmlFor={item.type} className={"label"}>
          <p>type:</p>
          <input
            // onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            value={item.type}
            type="text"
            name={item.type}
            id={item.type}
            disabled={true}
          ></input>
          <div className={"item-controls-container"}>
            <button
              className={"delete-btn"}
              onClick={(e) => remove(e, item, index)}
            >
              x
            </button>
          </div>
        </label>

        <label htmlFor={item.color} className={"label"}>
          <p>color:</p>
          <input
            // onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            value={item.color}
            type="text"
            name={item.color}
            id={item.color}
            disabled={true}
          ></input>
          <div className={"item-controls-container"}>
            <button
              className={"delete-btn"}
              onClick={(e) => remove(e, item, index)}
            >
              x
            </button>
          </div>
        </label>
      </li>
    );
  });

  // ************** TODO make delete hidden unless edting, make inputs disabled unles editing, save to temp, then upon save override settings
  // building settings from context
  const settingsMap = settingsKeys.map((item, index) => {
    if (item === "mwrTypes") {
      return (
        <li key={index}>
          <div className={"category-header-container"}>
            <h2 className={"category-header"}>mwr types</h2>
            <div className={"category-controls-container"}>
              <span className={"control-btns edit-btn"} onClick={enableEdit}>
                edit
              </span>
              <span
                className={"control-btns add-new-btn display-none"}
                onClick={(e) => addItem(e, item)}
              >
                add new
              </span>
              <span
                className={"control-btns cancel-btn display-none"}
                onClick={(e) => cancelChanges(e, item)}
              >
                cancel
              </span>
              <span
                className={"control-btns save-btn display-none"}
                onClick={(e) => saveSection(e, item)}
              >
                save
              </span>
            </div>
          </div>
          <ul>{mwrTypeSettingsMap}</ul>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <div className={"category-header-container"}>
            <h2 className={"category-header"}>{item}</h2>
            <div className={"category-controls-container"}>
              <span className={"control-btns edit-btn"} onClick={enableEdit}>
                edit
              </span>
              <span
                className={"control-btns add-new-btn display-none"}
                onClick={(e) => addItem(e, item)}
              >
                add new
              </span>
              <span
                className={"control-btns cancel-btn display-none"}
                onClick={(e) => cancelChanges(e, item)}
              >
                cancel
              </span>
              <span
                className={"control-btns save-btn display-none"}
                onClick={(e) => saveSection(e, item)}
              >
                save
              </span>
            </div>
          </div>
          <ul>
            {/* lesson learned: bracket notation use */}
            {/* mapping over the updateSettings.key[array] */}
            {/**************************************************************************************************8 */}
            {updateSettings[item].map((arrItem, index) => {
              /* const target = updateSettings[item][index]; */

              const tester = updateSettings[item][index]; //updateSettings.departments.0

              return (
                <li key={index}>
                  <label htmlFor={arrItem} className={"label"}>
                    <input
                      // changing specific value is where I am getting hung up
                      onChange={
                        (e) =>
                          // console.log(updateSettings)
                          change(e, item, index)

                        // item = departments
                        // index = 0
                        // arrItem = compounding
                      }
                      // value={updateSettings[item][index]}
                      value={tester}
                      type="text"
                      name={arrItem}
                      id={arrItem}
                      disabled={true}
                    ></input>
                    <div className={"item-controls-container"}>
                      <button
                        className={"delete-btn"}
                        onClick={(e) => remove(e, item, index)}
                      >
                        x
                      </button>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
  });
  // return <li key={index}>{Object.values(updateSettings[item])}</li>;
  // });

  return (
    <Layout>
      <SettingsWrapperStyled>
        <ul>{settingsMap}</ul>
      </SettingsWrapperStyled>

      <Link to="/admin">Go back to ADMIN</Link>
    </Layout>
  );
};

export default SettingsPage;
