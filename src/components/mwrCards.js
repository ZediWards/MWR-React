import * as React from "react"

import * as style from "../css_modules/mwr-cards.module.css"

const MwrCards = props => {
  console.log(props.data.length)
  console.table(props.data)

  const card = props.mwrTypes.map(type => {
    return (
      <div key={type.index} className={style.card}>
        <p className={style.textCenter}>{type} MWR</p>
        <div className={style.cardStats}>
          <div>
            <p className={style.textCenter}>stat1</p>
            <p className={style.textCenter}>#</p>
          </div>

          <div>
            <p className={style.textCenter}>stat2</p>
            <p className={style.textCenter}>#</p>
          </div>

          <div>
            <p className={style.textCenter}>stat3</p>
            <p className={style.textCenter}>#</p>
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
