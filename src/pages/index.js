import * as React from "react"
import { useState, useEffect, useContext } from "react"

import { dbContext } from "../../dbProvider"
import { updateStateObject, addNewFormDataToState } from "../utils/updatingState"


import Layout from "../components/layout"
import MwrCards from "../components/mwrCards"
import Leaderboard from "../components/leaderboard"
// import SearchBox from "../components/searchBox"
import FullTable from "../components/mainTable"

const IndexPage = () => {
  const [db, setDb] = useState([
    {
      id: 1,
      // Employee section
      type: "general",
      date: "2021-11-12",
      name: "Jon Doe",
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
      // left
      daysToCOmplete: "",
      // right
      completedDate: "",
      //
      // left
      dueDate: "2022-07-07",
      estHours: "2",
      assetId: "123",
      assetDescription: "a switch!",
      // right
      downtime: "1",
      actHours: "3",
      //
      // left
      // department
      site: "light switch",
      //
      // left
      requestNum: "",
      // name: "",
      // right
      requestedByEmail: "test@tesing.com",
      //
      // left
      // assignType: "", making just type. No nned to duplicate data
      assignTo: "Production Maintenance",
      // right
      assistant: "Bob",
      maintenanceTeamMember: "Jon",
      //
      // left
      briefDiscription: "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",

      workDiscription: "adf';dfjakdfja;dlkfjd;flk adlfkjdf;lkajdfk adlfkjdalk alfkja peroqeporiq[p erqe./,m/.z,vm dfa';e]pqoeid';fl.zd,mv a'f;la'e]pqoef ad';ma.v,m'af'ap4.",
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
      type: "safety",
      date: "2021-11-12",
      name: "Jane Doe",
      department: "production line 1",
      problem: "still broke",
      solution: "please fix it",
      // Maininence Section
      status: "unassigned",
      workOrderNum: "002",
      workOrderDate: "2021-12-21",
      workOrderTime: "11:00",
      projectNum: "008",
      scheduledDate: "2021-12-22",
      // needs applied to all
      openHistory: "",
      problemType: "",
      //
      // left
      daysToCOmplete: "",
      // right
      completedDate: "",
      //
      // left
      dueDate: "",
      estHours: "",
      assetId: "",
      assetDescription: "",
      // right
      downtime: "",
      actHours: "",
      //
      // left
      // department
      site: "",
      //
      // left
      requestNum: "",
      // name: "",
      // right
      requestedByEmail: "test2@testing.com",
      //
      // left
      // assignType: "", making just type. No nned to duplicate data
      assignTo: "",
      // right
      assistant: "",
      maintenanceTeamMember: "",
      //
      // left
      briefDiscription: "",
      workDiscription: "",
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
  ])

  // Lesson learned: anytime referencing these to data{} need to add .toLowerCase()
  const [mwrTypes, setMwrTypes] = useState(["General", "Urgent", "Safety"])


  // ****************************************************************
  // local storage persistance setup
  // setting second parameter of useEffect as [] means it will only run the first tome the page loads
  // on pageLoad, if lacaDb exists, then setdB to that, if not then setDb will be default
  useEffect(() => {
    const localDb = window.localStorage.getItem("localDb")
    if (localDb !== null) setDb(JSON.parse(localDb))
  }, [])

  // local storage setup storage
  // seocond param set to [db] means it will fire on page/component load & if db updates
  useEffect(() => {
    window.localStorage.setItem("localDb", JSON.stringify(db))
  }, [db])

  // ***********************************************************


  // searching state db
  const [searchQuery, setSearchQuery] = useState("")

  const [
    columnsIncludedWithinSearch,
    setColumnsIncludedWithinSearch
  ] = useState(["type", "department", "problem", "status"])
  // source for search https://github.com/devmentorlive/datatable-search-filter/blob/master/src/app/index.jsx
  // .filter returns a new array with items that meet our condition.
  // .some returns true/false. It does not modify the array
  // gives us the keys or our db

  // plain speak:
  // return the {} in the [] from our db IF
  // any of that objects keys that is in setColumnsIncludedWithinSearch [] AND
  // that keys value gives a positve value with (.indexOf(searchQuery.toLowerCase()) > -1)
  // ******** Primary Filter States
  const [primaryFilter, setPrimaryFilter] = useState("")
  const [primaryFilterBool, setPrimaryFilterBool] = useState(false)

  // pass this down to the btns in searchbar component
  const updatePrimaryFilter = e => {
    // setPrimaryFilter("")
    // setPrimaryFilterBool(false)
    e.target.parentElement.parentElement.childNodes.forEach(item => {
      if (
        e.target.value === item.textContent &&
        e.target.value !== primaryFilter
      ) {
        setPrimaryFilter(e.target.value)
        setPrimaryFilterBool(true)
        item.children[0].className = "filter-item-selected"
      } else if (
        e.target.value === item.textContent &&
        e.target.value === primaryFilter
      ) {
        item.children[0].className = "filter-item"
        setPrimaryFilter("")
        setPrimaryFilterBool(false)
        item.children[0].className = "filter-item"
      } else {
        item.children[0].className = "filter-item"
      }
    })
  }


  // ********** Primary FIlter included in search(db) function  ***WORKS***
  function search(db) {
    if (primaryFilterBool === true) {
      const primaryFilteredDb = db.filter(item => item.status === primaryFilter)
      const searchedDb = primaryFilteredDb.filter(dataRow =>
        columnsIncludedWithinSearch.some(
          column =>
            dataRow[column]
              .toString()
              .toLowerCase()
              // positive number if there is a match
              // try and length of value === length of indexOf...
              .indexOf(searchQuery.toLowerCase()) > -1
        )
      )
      return searchedDb
    } else {
      return db.filter(dataRow =>
        columnsIncludedWithinSearch.some(
          column =>
            dataRow[column]
              .toString()
              .toLowerCase()
              // positive number if there is a match
              // try and length of value === length of indexOf...
              .indexOf(searchQuery.toLowerCase()) > -1
        )
      )
    }
  }

  // will pass this as search component prop, calls and update state defined here
  const updateQuery = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <Layout>
      <div>
        <MwrCards data={db} mwrTypes={mwrTypes} handleClick={handleClick} />
        <Leaderboard data={db} />
        {/* in search example the search is in the app component with the db */}
        {/* <SearchBox
          queriedData={search(db)}
          searchQuery={searchQuery}
          updateQuery={updateQuery}
        /> */}
        {/* passes in the queried db to display in table */}
        <FullTable
          queriedData={search(db)}
          searchQuery={searchQuery}
          updateQuery={updateQuery}
          mwrTypes={mwrTypes}
          handleUpdate={handleUpdate}
          updatePrimaryFilter={updatePrimaryFilter}
        />

      </div>
    </Layout>
  )
}

export default IndexPage
