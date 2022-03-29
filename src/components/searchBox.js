import * as React from "react"

import * as style from "../css_modules/searchBox.module.css"

const SearchBox = ({ queriedData, searchQuery, updateQuery }) => {
  console.log("here here here")
  console.table(queriedData)
  return (
    <section className={style.searchContainer}>
      <div className={style.inputContainer}>
        <label htmlFor="search" className={style.flex}>
          <p className={style.searchLabel}>Search:</p>
          <input
            type="text"
            value={searchQuery}
            onChange={updateQuery}
            name="search"
            id="search"
            className={style.searchInput}
            placeholder="searchable fields: type, department, problem, status"
          />
        </label>
      </div>

      <ul className={style.filterContainer}>
        <li className={style.filterItem}>assigned</li>
        <li className={style.filterItem}>unassigned</li>
        <li className={style.filterItem}>scheduled</li>
        <li className={style.filterItem}>denied</li>
      </ul>
    </section>
  )
}

export default SearchBox
