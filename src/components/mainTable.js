import * as React from "react"

import * as style from "../css_modules/fullTable.module.css"

const FullTable = ({ data }) => {
  // making a mutable varible of the db state
  const mwrEntries = data
  // console.log(typeof data[9].date)

  // sorting mwr enties by desending date????
  // html5 date picker returns a string. Need to use newDate(pass in the string) to convert it to number. Then sorting should work on date
  // const mwrDesendingDate = mwrEntries.sort((a, b) => b.date - a.date)

  // generic function that takes array as paremeter to use for .map function
  const genericTableBuild = function (arr) {
    arr.map((item, index) => {
      return (
        <tr key={index}>
          <td className={style.textCenter}>{item.date}</td>
          <td className={style.textCenter}>{item.department}</td>
          <td className={style.textCenter}>{item.problem}</td>
          <td className={style.textCenter}>{item.status}</td>
        </tr>
      )
    })
  }

  const buildTable = genericTableBuild(mwrEntries)

  // building table data
  const buildMainTable = mwrEntries.map((mwr, index) => {
    return (
      <tr key={index}>
        <td className={style.textCenter}>{mwr.date}</td>
        <td className={style.textCenter}>{mwr.department}</td>
        <td className={style.textCenter}>{mwr.problem}</td>
        <td className={style.textCenter}>{mwr.status}</td>
      </tr>
    )
  })

  return (
    <section
      style={{
        marginTop: `1.45rem`
      }}
    >
      <h2>MWR Submitions</h2>
      <table className={style.tableWidth}>
        <thead>
          <tr>
            <th className={style.textCenter}>Date</th>
            <th className={style.textCenter}>Department</th>
            <th className={style.textCenter}>Problem</th>
            <th className={style.textCenter}>Status</th>
          </tr>
        </thead>
        <tbody>{buildMainTable}</tbody>
      </table>
    </section>
  )
}

export default FullTable
