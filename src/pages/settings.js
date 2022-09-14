import * as React from "react";
import { useState, useEffect, useContext } from "react";

import styled from "styled-components";
import { Link } from "gatsby";

import {
  GlobalSettingsContext,
  GlobalSettingsDispatchContext
} from "../context/GlobalContextProvider";

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
`;

const SettingsPage = () => {
  // context variables
  const settings = useContext(GlobalSettingsContext);
  console.log("FROM SETTINGS PAGE");
  console.table(settings);

  const settingsKeys = Object.keys(settings);

  // enableing edit function
  const enableEdit = (e) => {
    const category = e.target.closest("li");

    const categoryList = category.querySelector("ul");

    const listItems = categoryList.children;

    // display block on delete btn **all but mwr type**
    for (let listItem of listItems) {
      console.log(listItem.children[0].children[0].disabled);

      let btnTarget = listItem.children[0].children[1].children[0];
      btnTarget.className !== "delete-btn btn-visibile"
        ? (btnTarget.className = "delete-btn btn-visibile")
        : (btnTarget.className = "delete-btn");

      // enable inputs for editing
      let inputTarget = listItem.children[0].children[0]
      inputTarget.disabled === true ? (inputTarget.disabled = false) : (inputTarget.disabled = true)

      // *** next step is to allow onChange event to change the settings context
    }
  };

  // condition ? value if true : value if false

  // mapping mwrType seperate b/c array of objects
  const mwrTypeSettingsMap = settings.mwrTypes.map((item, index) => {
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
            <button className={"delete-btn"}>x</button>
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
            <button className={"delete-btn"}>x</button>
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
              <span onClick={enableEdit}>edit</span>
              <span>save</span>
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
              <span onClick={enableEdit}>edit</span>
              <span>save</span>
            </div>
          </div>
          <ul>
            {/* lesson learned: bracket notation use */}
            {settings[item].map((arrItem) => {
              return (
                <li>
                  <label htmlFor={arrItem} className={"label"}>
                    <input
                      // onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      value={arrItem}
                      type="text"
                      name={arrItem}
                      id={arrItem}
                      disabled={true}
                    ></input>
                    <div className={"item-controls-container"}>
                      <button className={"delete-btn"}>x</button>
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
  // return <li key={index}>{Object.values(settings[item])}</li>;
  // });

  console.log(settingsKeys);

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
