import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import MwrCards from "../components/mwrCards"

const IndexPage = () => {
  const [db, setDb] = useState([
    {
      type: "General",
      department: "compunding",
      name: "Jon Dooe",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Assigned"
    },
    {
      type: "General",
      department: "compunding",
      name: "Jon Doe",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      status: "Assigned"
    },
    {
      type: "Urgent",
      department: "Production Line 1",
      name: "Jon Doe",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Assigned"
    },
    {
      type: "Urgent",
      department: "Production Line 1",
      name: "Jimmy Dodo",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      status: "Unassigned"
    },
    {
      type: "Urgent",
      department: "Production Line 1",
      name: "Jon Doe",
      problem: "stuff is broke 3",
      solution: "fix it 3",
      status: "Unassigned"
    },
    {
      type: "General",
      department: "Production Line 2",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Unassigned"
    },
    {
      type: "General",
      department: "Production Line 2",
      name: "Jane Dee",
      problem: "stuff is broke 2",
      solution: "fix it 2",
      status: "Unassigned"
    },
    {
      type: "Safety",
      department: "Production Line 2",
      name: "Jon Doe",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Unassigned"

    },
    {
      type: "Safety",
      department: "Warehouse",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Completed"
    },
    {
      type: "General",
      department: "compunding",
      name: "Jane Dee",
      problem: "stuff is broke",
      solution: "fix it",
      status: "Completed"

    }
  ])
  const [mwrTypes, setMwrTypes] = useState(["General", "Urgent", "Safety"])

  const handleClick = () => {
    // example of adding item to the state array
    // setMwrTypes([...mwrTypes, "another!"])
    alert("hello")
  }

  return (
    <Layout>
      <div
        style={{
          border: "solid 1px red"
        }}
      >
        <MwrCards data={db} mwrTypes={mwrTypes} handleClick={handleClick} />
        <div> Leaderbaord</div>
        <div> Search/filter bar</div>
        <div> Full table g</div>
      </div>
    </Layout>
  )
}

export default IndexPage
