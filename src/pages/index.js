import * as React from "react"
import { useState, useEffect } from "react"

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
      type: "General",
      date: "2021-11-12",
      name: "Jon Doe",
      department: "Update Test",
      problem: "stuff is broke, details test",
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
      requestedByEmail: "",
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
    },
    {
      id: 2,
      // Employee section
      type: "General",
      department: "compounding",
      name: "Jon Doe",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      date: "12-1-2021",
      // Maininence Section
      status: "assigned",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    },
    {
      id: 3,
      // Employee section
      type: "Urgent",
      department: "Production Line 1",
      name: "Jimmy Dodo",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      date: "10-24-2021",
      // Maininence Section
      status: "completed",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    },
    {
      id: 4,
      // Employee section
      type: "Urgent",
      department: "Production Line 2",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      date: "09-13-2021",
      // Maininence Section
      status: "denied",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    },
    {
      id: 5,
      // Employee section
      type: "General",
      department: "Production Line 2",
      name: "Jane Dee",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      date: "04-06-2022",
      // Maininence Section
      status: "assigned",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    },
    {
      id: 6,
      // Employee section
      type: "Safety",
      department: "compunding",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      date: "2019-06-28",
      // Maininence Section
      status: "unassigned",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    }
  ])
  const [mwrTypes, setMwrTypes] = useState(["General", "Urgent", "Safety"])

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

  // adds object to db state
  const handleClick = formData => {
    // example of adding item to the state array
    setDb([...db, formData])
    console.table(db)
  }

  // updates an object already in db state
  const handleUpdate = (mwrData, mwrIndex) => {
    // logging correct item
    const updatedDb = db.map(item => {
      if (item.id === mwrData.id) {
        return mwrData
      }
      return item
    })
    // console.table(newDb)
    setDb([...updatedDb])
    //   // example of adding item to the state array
    //   // setDb([...db, mwrData[mwrIndex]])
    //   console.table(mwrData)
  }

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

  // *******************************works
  // function search(db) {
  //   return db.filter(dataRow =>
  //     columnsIncludedWithinSearch.some(
  //       column =>
  //         dataRow[column]
  //           .toString()
  //           .toLowerCase()
  //           // positive number if there is a match
  //           // try and length of value === length of indexOf...
  //           .indexOf(searchQuery.toLowerCase()) > -1
  //     )
  //   )
  // }

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

        {/* ! checking w/o serch(db) */}
        {/* <FullTable data={db} handleUpdate={handleUpdate} /> */}
      </div>
    </Layout>
  )
}
// comment for testing

export default IndexPage
