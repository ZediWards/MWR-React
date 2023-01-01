import * as React from "react";
import { useState, useEffect, useContext } from "react";

import { PopoverPicker } from "./popoverColorPicker";

import {
  AiOutlineCloseCircle,
  AiOutlineEdit,
  AiOutlineCheckCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import styled from "styled-components";
import { Link } from "gatsby";

import {
  GlobalSettingsContext,
  GlobalSettingsDispatchContext,
} from "../context/GlobalContextProvider";
import { ACTIONS } from "../context/GlobalContextProvider";

import Layout from "./layout";
import Header from "./header";

// ********* STYLES **************

const SettingsWrapperStyled = styled.div`
  border: 1px solid ThreeDLightShadow;
  max-width: 960px;
  margin: auto;
  margin-block-start: -10rem;
  padding-block-start: 1.5rem;

  .settings-ul {
    // max-width: 1000px;
    // margin: auto;
    margin-inline-start: 1rem;
  }

  li {
    list-style: none;
    /* border: 1px solid blue; */
  }

  p {
    margin-block-end: 0;
  }

  .settings-section-li {
    margin-block-end: 2.75rem;
    /* border: 1px solid blue; */
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
    justify-content: center;
  }

  svg.edit-icon {
    fill: var(--text-black);
  }

  svg.save-icon {
    fill: DarkSeaGreen;
  }

  svg.cancel-icon {
    fill: salmon;
  }

  svg.add-new-icon {
    fill: MediumPurple;
  }

  .category-header-container {
    display: flex;
    gap: 1rem;
    margin-block-end: 1.5rem;
  }

  @media (max-width: 440px) {
    .category-header-container {
      flex-wrap: nowrap;
    }
    .category-header-container > h2 {
      font-size: 1.25rem;
    }
  }

  .category-header-container-wrap {
    display: flex;
    gap: 1rem;
    margin-block-end: 1.5rem;
    flex-wrap: wrap;
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
    box-shadow: 0px 2px 1px var(--gray-light);
    /* padding-inline: 1rem; */
    /* making icons in centered circle */
    display: flex;
    justify-content: center;
    align-content: center;
    /* border-radius: 50%; */
    padding: 0.2rem;
    cursor: pointer;
  }

  .control-btns:hover {
    background-color: hsl(var(--safety-mwr-hue), 50%, 90%);
  }

  .control-icon {
    font-size: 1.5rem;
  }

  // .edit-icon > path {
  //   /* color: ; */
  // }

  // .add-new-icon > path {
  //   color: purple;
  // }

  // .cancel-icon > path {
  //   color: red;
  // }

  // .save-icon > path {
  //   color: green;
  // }

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

  /* // MWR-type section specific */

  .mwr-type-li {
    display: flex;
    gap: 2rem;
    margin-block-end: 0;
    /* // @media (max-width: 543px) {
    //   flex-direction: column;
    //   // flex-wrap: wrap;
    //   gap: 0rem;
      // border: 1px solid grey;
    // } */
  }

  .mwr-type-label {
    display: flex;
    flex-direction: row;
    margin-block-end: 1rem;
    gap: 1rem;
    /* border: 1px solid red; */
  }

  @media (max-width: 688px) {
    .category-header-container {
      justify-content: space-between;
      padding-inline-end: 1rem;
    }

    .mwr-type-li {
      flex-direction: column;
      // flex-wrap: wrap;
      gap: 0rem;
      // border: 1px solid grey;
      margin-block-end: 1rem;
    }
    /* all settings text-inputs */
    .input-text {
      min-width: 6em; /*lesson: lets input field shrink*/
      flex-grow: 1;
    }
    /* ********* */

    .mwr-type-input-text {
      margin-inline-start: 0.5rem;
      margin-inline-end: 1rem;
    }
    .mwr-type-input-color {
      margin-inline-end: 1rem;
    }
  }

  /* --gray-light from global css need a primary-hue declared to work */
  .delete-btn {
    align-self: flex-start;
    /* background-color: var(--background-safety); */
    background-color: var(--red-btn-color-darker);
    border: 1px solid var(--gray-light);
    box-shadow: 0px 2px 1px var(--gray-light);
    // transition: all 0.35s ease-Out;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    // only effects mwr-types delete btn since they are in columns at a breakpoint
    min-width: 50%;
    /* will be visable upon edit btn being clicked */
    display: none;
    // Lesson: &:hover needed for styled components to use hover
    &:hover {
      border: 1px solid var(--red-btn-color-darker);
      background-color: var(--light-background);
    }
  }

  /* TODO make hover into downClick */

  .btn-visibile {
    /* background-color: blue; */
    display: block;
  }

  .display-none {
    display: none;
  }
`;



const SettingsComponent = () => {
  // testing
  // Lesson: using state to hold the innderWidth instead of variable. All other components will rerender 
  // when state changes rather than on refresh, like variable method does
  // if (process.isClient) {
  //   const [windowDimension, setWindowDimension] = useState(null);
  // } else {
  // }

  const [windowDimension, setWindowDimension] = useState(null);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    // TODO In production, debouncing the handleResize would be a good idea.
    // reference article: https://dev.to/joserfelix/create-a-mobile-friendly-navigation-with-react-4930
    if (process.isClient) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowDimension <= 640;
  console.log(isMobile)

  //  end of test



  // logs on first and re-render of page
  // the way I did it here required page to be reloaded for variable values to be recognized by DOM components
  // const viewPortWidth = window.innerWidth;
  // useEffect(() => {
  //   console.log(viewPortWidth);
  // }, [viewPortWidth]);

  // context variables
  const settings = useContext(GlobalSettingsContext);
  const settingsDispatch = useContext(GlobalSettingsDispatchContext);
  console.log("CONTEXT SETTINGS TABLE");
  console.table(settings);

  // other variables
  const settingsKeys = Object.keys(settings);
  // copy of localStorage context
  const [updateSettings, setUpdateSettings] = useState({
    ...settings,
  });
  console.log("UPDATE SETTINGS TABLE");
  console.table(updateSettings);

  //*************? Edit functionality **************/

  // TODO:
  // [x] edit: hide when clicked, show other btns
  // [x] cancel, save: hide all btns and show edit
  // [x] make delete btn display: none as well && inputs enabled at the right time
  // [x] addNew: enable input for editing and delete btn visiable

  // Show Hide Function
  // ! WORKS for mwrTypes and others
  const showHideBtns = (e, btnType) => {
    console.log(e);
    // edit state
    // DOM variables
    // control buttons
    const parentDiv = e.target.closest("div");
    const editBtn = parentDiv.querySelector(".edit-btn");
    const addNewBtn = parentDiv.querySelector(".add-new-btn");
    const cancelBtn = parentDiv.querySelector(".cancel-btn");
    const saveBtn = parentDiv.querySelector(".save-btn");
    //  inputs fild
    const category = e.target.closest("li");
    const headerContainer = category.querySelector("div");
    const categoryList = category.querySelector("ul");
    const listItems = categoryList.children;
    console.log(headerContainer);
    console.log(window.innerWidth);

    // switch (innerWidthSection) {
    //   case [815, "test"]: {
    //     console.log("hello");
    //   }

    //   //  default:
    //   //   throw new Error("Bad Action Type");
    // }

    switch (btnType) {
      // update settings section
      case "edit-mwrType": {
        // console.log("showHide is wirking for mwrType edit btn");
        // console.log(parentDiv); //control-container
        // console.log(editBtn);
        // console.log(addNewBtn);
        // console.log(cancelBtn);
        // console.log(saveBtn);
        // console.log(category); //li  (whole category)
        // console.log(categoryList); //ul  (category list)
        // console.log(listItems); //li  (list item)
        // ****************************************
        editBtn.className = "control-btns edit-btn display-none";
        // setEditState(true);
        // console.log(editState);
        // !! uncomment out addNewBtn className if implimenting fuction
        // !!!addNewBtn.className = "control-btns add-new-btn";
        cancelBtn.className = "control-btns cancel-btn";
        saveBtn.className = "control-btns save-btn";

        // *****************************************

        for (let listItem of listItems) {
          let btnTarget = listItem.querySelector(".delete-btn");
          btnTarget.className !== "delete-btn btn-visibile"
            ? (btnTarget.className = "delete-btn btn-visibile")
            : (btnTarget.className = "delete-btn");

          let inputTargets = listItem.querySelectorAll("input"); //nodeList
          [...inputTargets].forEach((input) => {
            // lesson: spreading nodeList out to use array method. could use for loop w/o spreading
            input.disabled === true
              ? (input.disabled = false)
              : (input.disabled = true);
          });
        }
        break;
      }
      case "edit-companyName": {
        // console.log("showHide is wirking for mwrType edit btn");
        // console.log(parentDiv); //control-container
        // console.log(editBtn);
        // console.log(addNewBtn);
        // console.log(cancelBtn);
        // console.log(saveBtn);
        // console.log(category); //li  (whole category)
        // console.log(categoryList); //ul  (category list)
        // console.log(listItems); //li  (list item)
        // ****************************************
        editBtn.className = "control-btns edit-btn display-none";
        // setEditState(true);
        // console.log(editState);
        // !! uncomment out addNewBtn className if implimenting fuction
        // !!!addNewBtn.className = "control-btns add-new-btn";
        cancelBtn.className = "control-btns cancel-btn";
        saveBtn.className = "control-btns save-btn";

        // *****************************************

        for (let listItem of listItems) {
          // let btnTarget = listItem.querySelector(".delete-btn");
          // btnTarget.className !== "delete-btn btn-visibile"
          //   ? (btnTarget.className = "delete-btn btn-visibile")
          //   : (btnTarget.className = "delete-btn");

          let inputTargets = listItem.querySelectorAll("input"); //nodeList
          [...inputTargets].forEach((input) => {
            // lesson: spreading nodeList out to use array method. could use for loop w/o spreading
            input.disabled === true
              ? (input.disabled = false)
              : (input.disabled = true);
          });
        }
        break;
      }
      case "edit": {
        editBtn.className = "control-btns edit-btn display-none";
        addNewBtn.className = "control-btns add-new-btn";
        cancelBtn.className = "control-btns cancel-btn";
        saveBtn.className = "control-btns save-btn";
        // inputs and delete btns
        // display block on delete btn **all but mwr type**
        for (let listItem of listItems) {
          // console.log(listItem.children[0].children[0].disabled);

          // let btnTarget = listItem.children[0].children[1].children[0];  //querySeletor replaced DOM dot notation
          let btnTarget = listItem.querySelector(".delete-btn");
          btnTarget.className !== "delete-btn btn-visibile"
            ? (btnTarget.className = "delete-btn btn-visibile")
            : (btnTarget.className = "delete-btn");

          // enable inputs for editing
          // let inputTarget = listItem.children[0].children[0];  //querySelector replaced this
          let inputTarget = listItem.querySelector("input"); // element, not a nodList since not using querySelectorAll
          console.log(inputTarget);
          inputTarget.disabled === true
            ? (inputTarget.disabled = false)
            : (inputTarget.disabled = true);
        }
        break;
      }

      // *******************************************************

      case "cancel-mwrType":
      case "save-mwrType":
        editBtn.className = "control-btns edit-btn";
        // !! addNewBtn.className = "control-btns add-new-btn display-none";
        cancelBtn.className = "control-btns cancel-btn display-none";
        saveBtn.className = "control-btns save-btn display-none";

        // inputs and delete btns
        // display block on delete btn **all but mwr type**
        for (let listItem of listItems) {
          // Don't really need terniary but am keeping for a reference
          let btnTarget = listItem.querySelector(".delete-btn");
          btnTarget.className !== "delete-btn"
            ? (btnTarget.className = "delete-btn")
            : (btnTarget.className = "delete-btn btn-visibile");

          // enable inputs for editing
          // let inputTarget = listItem.querySelector("input");
          // inputTarget.disabled === false
          //   ? (inputTarget.disabled = true)
          //   : (inputTarget.disabled = false);

          let inputTargets = listItem.querySelectorAll("input"); //nodeList
          [...inputTargets].forEach((input) => {
            // lesson: spreading nodeList out to use array method. could use for loop w/o spreading
            input.disabled === false
              ? (input.disabled = true)
              : (input.disabled = false);
          });
        }
        break;
      // ******************************************************************
      case "cancel-companyName":
      case "save-companyName":
        editBtn.className = "control-btns edit-btn";
        // !! addNewBtn.className = "control-btns add-new-btn display-none";
        cancelBtn.className = "control-btns cancel-btn display-none";
        saveBtn.className = "control-btns save-btn display-none";

        // inputs and delete btns
        // display block on delete btn **all but mwr type**
        for (let listItem of listItems) {
          // Don't really need terniary but am keeping for a reference
          // let btnTarget = listItem.querySelector(".delete-btn");
          // btnTarget.className !== "delete-btn"
          //   ? (btnTarget.className = "delete-btn")
          //   : (btnTarget.className = "delete-btn btn-visibile");

          // enable inputs for editing
          // let inputTarget = listItem.querySelector("input");
          // inputTarget.disabled === false
          //   ? (inputTarget.disabled = true)
          //   : (inputTarget.disabled = false);

          let inputTargets = listItem.querySelectorAll("input"); //nodeList
          [...inputTargets].forEach((input) => {
            // lesson: spreading nodeList out to use array method. could use for loop w/o spreading
            input.disabled === false
              ? (input.disabled = true)
              : (input.disabled = false);
          });
        }
        break;

      // *****************************************************

      case "cancel":
      case "save":
        editBtn.className = "control-btns edit-btn";
        addNewBtn.className = "control-btns add-new-btn display-none";
        cancelBtn.className = "control-btns cancel-btn display-none";
        saveBtn.className = "control-btns save-btn display-none";

        // inputs and delete btns
        // display block on delete btn **all but mwr type**
        for (let listItem of listItems) {
          // Don't really need terniary but am keeping for a reference
          let btnTarget = listItem.querySelector(".delete-btn");
          btnTarget.className !== "delete-btn"
            ? (btnTarget.className = "delete-btn")
            : (btnTarget.className = "delete-btn btn-visibile");

          // enable inputs for editing
          // let inputTarget = listItem.querySelector("input");
          // inputTarget.disabled === false
          //   ? (inputTarget.disabled = true)
          //   : (inputTarget.disabled = false);

          let inputTargets = listItem.querySelectorAll("input"); //nodeList
          [...inputTargets].forEach((input) => {
            // lesson: spreading nodeList out to use array method. could use for loop w/o spreading
            input.disabled === false
              ? (input.disabled = true)
              : (input.disabled = false);
          });
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
  // category will only be defined on mwrType category
  const enableEdit = (e, category) => {
    console.log(category); //undefined if not the mwrType category

    category === "mwrType"
      ? showHideBtns(e, "edit-mwrType")
      : category === "companyName"
        ? showHideBtns(e, "edit-companyName")
        : showHideBtns(e, "edit");
  };

  //***************? onChange Function **************************/
  const change = (e, item, index, mwrType, mwrKey) => {
    mwrType === "mwrType"
      ? mwrOnChange()
      : // e, item, index, mwrType
      othersOnChange();
    console.log(mwrKey);
    // mwrKey = type OR color
    // text input = event object
    // color picker = hsl value only

    function mwrOnChange() {
      const newArr = updateSettings.mwrTypes.slice();
      // newArr[index][mwrKey] = e.target.value;
      if (mwrKey === "type") {
        newArr[index][mwrKey] = e.target.value;
      } else if (mwrKey === "color") {
        newArr[index][mwrKey] = e;
      }

      // ! WORKS!!!!!!!!
      setUpdateSettings((current) => {
        console.table(current);
        return {
          ...current,
        };
      });
    }

    function othersOnChange() {
      const newArr = updateSettings[item].slice();
      newArr[index] = e.target.value;
      //! WORKS!!!!!!!!
      console.log(updateSettings[item]); //array that is copied before changes
      console.log(item); // departments
      console.log(newArr); // array copy
      console.log(newArr[index]); // value changed on newArr
      console.log(e); //onChange object

      setUpdateSettings((current) => {
        return {
          ...current,
          [item]: newArr,
        };
      });
      console.log(newArr);
      console.log({ ...updateSettings, [item]: newArr });
    }

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
  //! WORKS for mwrTypes and others
  const remove = (e, item, index, settingsCategory) => {
    e.stopPropagation();
    settingsCategory === "mwrType" ? mwrRemove() : othersRemove();

    // console.log(updateSettings[item]); //compounding
    // console.log(item); //departments AND {type: general, colo: green}
    // console.log(updateSettings[item][index]); //compounding
    // console.log(index); //0 (compoundings index within departments array)

    function mwrRemove() {
      console.log("MWR-REMOVE fired");
      console.log(index); //index inside of mwrType key
      const filtered = updateSettings.mwrTypes.filter((obj) => {
        return obj !== updateSettings.mwrTypes[index];
      });
      setUpdateSettings((current) => {
        return {
          ...current,
          mwrTypes: filtered,
        };
      });
    }

    function othersRemove() {
      const filtered = updateSettings[item].filter((value) => {
        // [index] refers to parameter passed into remove() i.e the value
        return value !== updateSettings[item][index]; //updatedSettings.mwrType[index]
      });
      setUpdateSettings((current) => {
        return {
          ...current,
          [item]: filtered,
        };
      });
    }
  };

  //***************? Add New List Item Function **************************/
  // !WORKS for mwrTypes and others
  // mwrTypes: push an template object into the array of objects

  // async in order to enable lastChild input and delete btn once added
  function addItem(e, item) {
    e.stopPropagation();
    item === "mwrTypes" ? mwrAdd() : othersAdd();

    async function mwrAdd() {
      console.log("MWR ADD fired");
      const newArr = updateSettings.mwrTypes.slice();
      newArr.push({ type: "", color: "" });
      await setUpdateSettings((current) => {
        return {
          ...current,
          mwrTypes: newArr,
        };
      });

      // variables for following actions
      // lesson: nice organization
      const controlContainer = e.target.closest("div");
      const categoryDiv = controlContainer.parentElement;
      const categoryLi = categoryDiv.parentElement;
      const listUnorderedList = categoryLi.lastChild;
      const addedListItem = listUnorderedList.lastChild;
      const deleteBtnDiv = addedListItem.querySelector(
        ".item-controls-container"
      );
      const deleteBtn = deleteBtnDiv.querySelector(".delete-btn");

      // delete btn visibility
      deleteBtn.className = "delete-btn btn-visibile";

      // enable inputs
      const addedItemChildren = addedListItem.children; //HTML collection object
      console.log(addedItemChildren);
      for (let child of addedItemChildren) {
        if (child.className === "mwr-type-label") {
          // let input = child.querySelector("input")
          let input = child.children[1];
          input.disabled = false;
          // console.log(input)
        } else {
          return;
        }
      }
    }

    async function othersAdd() {
      const newArr = updateSettings[item].slice();
      console.log(item); // departments

      newArr.push("");
      await setUpdateSettings((current) => {
        return {
          ...current,
          [item]: newArr,
        };
      });

      // new organization test! WORKS!
      const controlContainer = e.target.closest("div");
      console.log(controlContainer);
      const categoryDiv = controlContainer.parentElement;
      console.log(categoryDiv);
      const categoryLi = categoryDiv.parentElement;
      console.log(categoryLi);
      const listUnorderedList = categoryLi.lastChild;
      console.log(listUnorderedList);
      const addedListItem = listUnorderedList.lastChild;
      console.log(addedListItem);
      const addedInputField = addedListItem.querySelector(".input-text");
      console.log(addedInputField);
      // input enabled
      addedInputField.disabled = false;
      const deleteBtnDiv = addedListItem.querySelector(
        ".item-controls-container"
      );
      console.log(deleteBtnDiv);
      const deleteBtn = deleteBtnDiv.querySelector(".delete-btn");
      console.log(deleteBtn);

      // delete btn visibility
      deleteBtn.className = "delete-btn btn-visibile";
    }
  }

  //***************? Cancel Changes Function **************************/
  //! WORKS for mwrTypes and others
  const cancelChanges = (e, item, category) => {
    e.stopPropagation();
    category === "mwrType"
      ? showHideBtns(e, "cancel-mwrType")
      : category === "companyName"
        ? showHideBtns(e, "cancel-companyName")
        : showHideBtns(e, "cancel");

    const newArr = settings[item].slice();
    console.table(newArr);
    setUpdateSettings((current) => {
      return {
        ...current,
        [item]: newArr,
      };
    });
  };
  //***************? Save to Context Local Storage Function **************************/
  //! WORKS for mwrTypes and others
  const saveSection = (e, item, category) => {
    e.preventDefault();
    category === "mwrType"
      ? showHideBtns(e, "save-mwrType")
      : category === "companyName"
        ? showHideBtns(e, "save-companyName")
        : showHideBtns(e, "save");

    const newArr = updateSettings[item].slice();
    const updatedSettings = {
      section: item,
      data: newArr,
    };
    console.log("overriding context local storage");
    console.log(item); //settings key
    console.log(updatedSettings); //payload
    // settingsDispatch({ type: ACTIONS.UPDATE_SETTINGS, payload: updateSettings });
    settingsDispatch({
      type: ACTIONS.UPDATE_SETTINGS_SECTION,
      payload: updatedSettings,
    });
  };

  // const styleChecker = (e) {

  // }

  // TODO
  // [] basic settigns STYLES
  // [] company name displayed on pdf
  // [] 2 good dummy mwr submitions
  // [] photo display on details modal
  // [] photo upload on mwr create modal
  // [] secure pages
  // [] sort leaderboad by mwrType and or date range

  //? *********** Mapping JSX **********************
  // TODO: building and general maint. are editable under maint. departments but static sections within settings object.
  const settingsCategorySorter = (item) => {
    switch (item) {
      // update settings section
      case "companyName": {
        return "Company Name";
        break;
      }
      case "departments": {
        return "Departments";
        break;
      }
      case "status": {
        return "Status";
        break;
      }
      case "problemType": {
        return "Problem Type";
        break;
      }
      case "maintenenceDepartments": {
        return "Maintenance Departments";
        break;
      }
      case "buildingMainteneceEmployees": {
        return "Building Maintenance Employees";
        break;
      }
      case "generalMaintenenceEmployees": {
        return "General Maintenance Employees";
        break;
      }
    }
  };

  // mapping mwrType separate b/c array of objects
  const mwrTypeSettingsMap = updateSettings.mwrTypes.map((item, index) => {
    const mwrType = "mwrType";
    console.log(`WWAAAAAAA ${index}`);
    return (
      // li is parent of 2 labels and 1 div
      <li key={index} className={"mwr-type-li"}>
        <label htmlFor={item.type} className={"mwr-type-label"}>
          {/* p tag not present on non mwr type */}
          <p>type:</p>
          <input
            className="input-text mwr-type-input-text"
            onChange={(e) =>
              // console.log(updateSettings)
              change(e, item, index, "mwrType", "type")
            }
            value={item.type}
            type="text"
            name={item.type}
            id={item.type}
            disabled={true}
            data-index={index}
          ></input>
        </label>

        <label htmlFor={item.color} className={"mwr-type-label"}>
          <p>color:</p>
          <PopoverPicker
            className="input-text mwr-type-input-color"
            color={item.color}
            disabled={true}
            onChange={(e) => change(e, item, index, "mwrType", "color")}
            data-key="color"
          />
        </label>
        <div className={"item-controls-container"}>
          <button
            className={"delete-btn"}
            onClick={(e) => remove(e, item, index, "mwrType")}
          >
            Delete
          </button>
        </div>
        {windowDimension <= 688 && (
          <hr
            style={{
              backgroundColor: "ThreeDLightShadow",
              marginBlockStart: "1rem",
              marginBlockEnd: "1rem",
              marginInlineEnd: "1rem",
            }}
          ></hr>
        )}
      </li>
    );
  });

  // ************** TODO make delete hidden unless edting, make inputs disabled unles editing, save to temp, then upon save override settings
  // building settings from context
  const settingsMap = settingsKeys.map((item, index) => {
    if (item === "mwrTypes") {
      return (
        <li key={index} className={"settings-section-li"}>
          <div className={"category-header-container"}>
            <h2 className={"category-header"}>MWR Types</h2>
            <div className={"category-controls-container"}>
              <span
                className={"control-btns edit-btn"}
                onClick={(e) => enableEdit(e, "mwrType")}
              >
                {windowDimension > 820 ? (
                  "edit"
                ) : (
                  <AiOutlineEdit className="control-icon edit-icon" />
                )}
              </span>
              {/* <span
                className={"control-btns add-new-btn display-none"}
                onClick={(e) => addItem(e, item)}
              >
                {windowDimension > 820 ? (
                  "add new"
                ) : (
                  <AiOutlinePlusCircle className="control-icon add-new-icon" />
                )}
              </span> */}
              <span
                className={"control-btns cancel-btn display-none"}
                onClick={(e) => cancelChanges(e, item, "mwrType")}
              >
                {windowDimension > 820 ? (
                  "cancel"
                ) : (
                  <AiOutlineCloseCircle className="control-icon cancel-icon" />
                )}
              </span>
              <span
                className={"control-btns save-btn display-none"}
                onClick={(e) => saveSection(e, item, "mwrType")}
              >
                {windowDimension > 820 ? (
                  "save"
                ) : (
                  <AiOutlineCheckCircle className="control-icon save-icon" />
                )}
              </span>
            </div>
          </div>
          <ul>{mwrTypeSettingsMap}</ul>
        </li>
      );
    } else if (item === "companyName") {
      //  switch (btnType) {
      // // update settings section
      // case "edit-mwrType": {

      // }
      //  }
      return (
        <li key={index} className={"settings-section-li"}>
          <div className={"category-header-container"}>
            <h2 className={"category-header"}>
              {settingsCategorySorter(item)}
            </h2>
            <div className={"category-controls-container"}>
              <span
                className={"control-btns edit-btn"}
                onClick={(e) => enableEdit(e, "companyName")}
              >
                {windowDimension > 820 ? (
                  "edit"
                ) : (
                  <AiOutlineEdit className="control-icon edit-icon" />
                )}
              </span>
              {/* <span
                className={"control-btns add-new-btn display-none"}
                onClick={(e) => addItem(e, item)}
              >
                {windowDimension > 820 ? (
                  "add new"
                ) : (
                  <AiOutlinePlusCircle className="control-icon add-new-icon" />
                )}
              </span> */}
              <span
                className={"control-btns cancel-btn display-none"}
                onClick={(e) => cancelChanges(e, item, "companyName")}
              >
                {windowDimension > 820 ? (
                  "cancel"
                ) : (
                  <AiOutlineCloseCircle className="control-icon cancel-icon" />
                )}
              </span>
              <span
                className={"control-btns save-btn display-none"}
                onClick={(e) => saveSection(e, item, "companyName")}
              >
                {windowDimension > 820 ? (
                  "save"
                ) : (
                  <AiOutlineCheckCircle className="control-icon save-icon" />
                )}
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
                      className="input-text"
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
                    {/* <div className={"item-controls-container"}>
                      <button
                        className={"delete-btn"}
                        onClick={(e) => remove(e, item, index)}
                      >
                        Delete
                      </button>
                    </div> */}
                  </label>
                </li>
              );
            })}
          </ul>
        </li>
      );
    } else {
      //  switch (btnType) {
      // // update settings section
      // case "edit-mwrType": {

      // }
      //  }
      return (
        <li key={index} className={"settings-section-li"}>
          <div className={"category-header-container"}>
            <h2 className={"category-header"}>
              {settingsCategorySorter(item)}
            </h2>
            <div className={"category-controls-container"}>
              <span className={"control-btns edit-btn"} onClick={enableEdit}>
                {windowDimension > 820 ? (
                  "edit"
                ) : (
                  <AiOutlineEdit className="control-icon edit-icon" />
                )}
              </span>
              <span
                className={"control-btns add-new-btn display-none"}
                onClick={(e) => addItem(e, item)}
              >
                {windowDimension > 820 ? (
                  "add new"
                ) : (
                  <AiOutlinePlusCircle className="control-icon add-new-icon" />
                )}
              </span>
              <span
                className={"control-btns cancel-btn display-none"}
                onClick={(e) => cancelChanges(e, item)}
              >
                {windowDimension > 820 ? (
                  "cancel"
                ) : (
                  <AiOutlineCloseCircle className="control-icon cancel-icon" />
                )}
              </span>
              <span
                className={"control-btns save-btn display-none"}
                onClick={(e) => saveSection(e, item)}
              >
                {windowDimension > 820 ? (
                  "save"
                ) : (
                  <AiOutlineCheckCircle className="control-icon save-icon" />
                )}
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
                      className="input-text"
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
                        Delete
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
        <ul className="settings-ul">{settingsMap}</ul>
      </SettingsWrapperStyled>
    </Layout>
  );
};

export default SettingsComponent;
