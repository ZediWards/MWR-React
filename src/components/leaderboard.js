import * as React from "react"

import * as style from "../css_modules/leaderboard.module.css"

const Leaderboard = ({ data }) => {
  // making a mutable varible of the db state
  const mwrEntries = data

  // variable of just the names value from the objects within the array
  const namesFromData = mwrEntries.map(mwr => {
    return mwr.name
  })

  // returning no duplicates from the list of names
  const uniqueNames = namesFromData.filter((name, index) => {
    return namesFromData.indexOf(name) === index
  })

  // function that will count how many times a value appears within an array.
  const countOfNames = function (array, value) {
    return array.reduce((n, x) => n + (x === value), 0)
  }

  // Using the reduce function above inside a mapping function of the unique names to return the number of times the unique name appears in the namesFromData array
  const uniqueNamesAndSubmittionsNumber = uniqueNames.map(name => {
    return {
      name: name,
      numberOfSubmitions: countOfNames(namesFromData, name)
    }
  })

  // sorting by numberOfSubmitions in a decinding manner
  const desendingOrder = uniqueNamesAndSubmittionsNumber.sort(
    (a, b) => b.numberOfSubmitions - a.numberOfSubmitions
  )

  // console.log(desendingOrder)

  const buildLeaderBoardTable = desendingOrder.map((person, index) => {
    return (
      <tr key={index}>
        <td className={style.textCenter}>
          {index + 1}. {person.name}
        </td>
        <td className={style.textCenter}>{person.numberOfSubmitions}</td>
      </tr>
    )
  })

  return (
    <section
      style={{
        marginTop: `1.45rem`
      }}
    >
      <h2>Leaderboard</h2>
      <table className={style.tableWidth}>
        <thead>
          <tr>
            <th className={style.textCenter}>Name</th>
            <th className={style.textCenter}># Submited</th>
          </tr>
        </thead>
        <tbody>{buildLeaderBoardTable}</tbody>
      </table>
    </section>
  )
}

export default Leaderboard
