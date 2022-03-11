import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import MwrCards from "../components/mwrCards"
import Leaderboard from "../components/leaderboard"
import SearchBox from "../components/searchBox"
import MainTable from "../components/mainTable"

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

  return (
    <Layout>
      <div
        style={{
          border: "solid 1px red"
        }}
      >
        <MwrCards data={db} mwrTypes={mwrTypes} handleClick={handleClick} />
        <Leaderboard data={db} />
        <SearchBox data={db} />
        <MainTable data={db} />
      </div>
    </Layout>
  )
}

export default IndexPage
