import * as React from "react"

// just for the card class
import * as style from "../css_modules/mwr-cards.module.css"


import MwrCard from "./mwrCard"
const MwrCards = ({ data, mwrTypes, handleClick }) => {
  console.log(data.length)
  console.table(data)




  const card = mwrTypes.map(type => {
    const mwrType = data.filter((mwr) => mwr.type === type)
    const unAssignedMwrType = mwrType.filter((mwr) => mwr.status === "Unassigned")
    const assignedMwrType = mwrType.filter((mwr) => mwr.status === "Assigned")
    const completedMwrType = mwrType.filter((mwr) => mwr.status === "Completed")

    return (
      <div className={style.card}>
        <MwrCard mwrType={type} unAssigned={unAssignedMwrType} assigned={assignedMwrType} completed={completedMwrType} />
      </div>

    )
  })

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "solid 1px red"
      }}
    >
      {card}
    </div>
  )
}

export default MwrCards
