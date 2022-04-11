import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import MwrCards from "../components/mwrCards"
import Leaderboard from "../components/leaderboard"
import SearchBox from "../components/searchBox"
import FullTable from "../components/mainTable"

const IndexPage = () => {
  const [db, setDb] = useState([
    {
      id: 1,
      // Employee section
      type: "General",
      date: "2021-11-12",
      name: "Jon Doe",
      department: "compounding",
      problem: "stuff is broke, details test",
      solution: "fix it",
      // Maininence Section
      status: "Unassigned",
      workOrderNum: "001",
      workOrderDate: "2021-11-21",
      workOrderTime: "12:00",
      projectNum: "007",
      scheduledDate: "2021-11-22"
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
      status: "Assigned",
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
      status: "Unassigned",
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
      status: "Assigned",
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
      status: "Assigned",
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
      status: "Unassigned",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    }
  ])
  const [mwrTypes, setMwrTypes] = useState(["General", "Urgent", "Safety"])

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

  const [columnsIncludedWithinSearch, setColumnsIncludedWithinSearch] = useState(["type", "department", "problem", "status"])
  // source for search https://github.com/devmentorlive/datatable-search-filter/blob/master/src/app/index.jsx
  // .filter returns a new array with items that passed as true
  // .some returns true/false. It does not modify the array
  // gives us the keys or our db


  function search(db) {
    return db.filter(dataRow =>
      columnsIncludedWithinSearch.some(
        column =>
          dataRow[column]
            .toString()
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) > -1
      )
    )
  }

  // FOR CHECKBOXES LATER
  // const column = db[0] && Object.keys(db[0])

  // will pass this as search component prop, calls and update state defined here
  const updateQuery = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <Layout>
      <div
        style={
          {
            // border: "solid 1px red"
          }
        }
      >
        <MwrCards data={db} mwrTypes={mwrTypes} handleClick={handleClick} />
        <Leaderboard data={db} />
        {/* in search example the search is in the app component with the db */}
        <SearchBox
          queriedData={search(db)}
          searchQuery={searchQuery}
          updateQuery={updateQuery}
        />
        {/* passes in the queried db to display in table */}
        <FullTable data={search(db)} handleUpdate={handleUpdate} />

        {/* ! checking w/o serch(db) */}
        {/* <FullTable data={db} handleUpdate={handleUpdate} /> */}

      </div>
    </Layout>
  )
}

export default IndexPage
