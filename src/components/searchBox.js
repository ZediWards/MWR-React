import * as React from "react"

import * as style from "../css_modules/searchBox.module.css"

const SearchBox = () => (
  <section className={style.searchContainer}>
    <div>
      <label htmlFor="search" className={style.flex}>
        <p className={style.searchLabel}>Search:</p>
        <input
          // onChange={e => setFormData({ ...formData, name: e.target.value })}
          // value={formData.name}
          type="text"
          name="search"
          id="search"
          className={style.searchInput}
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

export default SearchBox
