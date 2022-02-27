import * as React from "react"

import * as style from "../css_modules/mwr-cards.module.css"

const MwrCards = props => {
  console.log(props.data.length)
  console.table(props.data)

  const card = props.mwrTypes.map(type => {
    const mwrType = props.data.filter((mwr) => mwr.type === type)
    const unAssignedMwrType = mwrType.filter((mwr) => mwr.status === "Unassigned")
    const assignedMwrType = mwrType.filter((mwr) => mwr.status === "Assigned")
    const completedMwrType = mwrType.filter((mwr) => mwr.status === "Completed")

    return (
      <div key={type.index} className={style.card}>
        <p className={style.textCenter}>{type} MWR</p>
        <div className={style.cardStats}>
          <div>
            <p className={style.textCenter}>Unassigned</p>
            <p className={style.textCenter}>{unAssignedMwrType.length}</p>
          </div>

          <div>
            <p className={style.textCenter}>Assigned</p>
            <p className={style.textCenter}>{assignedMwrType.length}</p>
          </div>

          <div>
            <p className={style.textCenter}>Completed</p>
            <p className={style.textCenter}>{completedMwrType.length}</p>
          </div>
        </div>
        <button className={style.btn} onClick={props.handleClick} type="button">
          Create
        </button>
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
