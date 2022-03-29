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
      type: "General",
      department: "compunding",
      name: "Jon Dooe",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Assigned",
      date: "h"
    },
    {
      type: "General",
      department: "compunding",
      name: "Jon Doe",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      status: "Assigned",
      date: "h"
    },
    {
      type: "Urgent",
      department: "Production Line 1",
      name: "Jon Doe",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Assigned",
      date: "h"
    },
    {
      type: "Urgent",
      department: "Production Line 1",
      name: "Jimmy Dodo",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      status: "Unassigned",
      date: "h"
    },
    {
      type: "Urgent",
      department: "Production Line 1",
      name: "Jon Doe",
      problem: "stuff is broke 3",
      solution: "fix it 3",
      status: "Unassigned",
      date: "h"
    },
    {
      type: "General",
      department: "Production Line 2",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Unassigned",
      date: "h"
    },
    {
      type: "General",
      department: "Production Line 2",
      name: "Jane Dee",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      status: "Unassigned",
      date: "h"
    },
    {
      type: "Safety",
      department: "Production Line 2",
      name: "Jon Doe",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Unassigned",
      date: "h"
    },
    {
      type: "Safety",
      department: "Warehouse",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Completed",
      date: "h"
    },
    {
      type: "General",
      department: "compunding",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Completed",
      date: "2019-06-28"
    }
  ])
  const [mwrTypes, setMwrTypes] = useState(["General", "Urgent", "Safety"])
  const handleClick = formData => {
    // example of adding item to the state array
    setDb([...db, formData])
    console.table(db)
  }

  // searching db
  const [searchQuery, setSearchQuery] = useState("")
  const [
    columnsIncludedWithinSearch,
    setColumnsIncludedWithinSearch
  ] = useState(["type", "department", "problem", "status"])
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
        style={{
          border: "solid 1px red"
        }}
      >
        <MwrCards data={db} mwrTypes={mwrTypes} handleClick={handleClick} />
        <Leaderboard data={db} />
        {/* in search example the seach is in the app omponent with the db */}
        <SearchBox
          queriedData={search(db)}
          searchQuery={searchQuery}
          updateQuery={updateQuery}
        />
        {/* passes in the queried db to display in table */}
        <FullTable data={search(db)} handleClick={handleClick} />
      </div>
    </Layout>
  )
}

export default IndexPage
