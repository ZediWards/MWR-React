import * as React from "react"
import styled from "styled-components"

// import * as style from "../css_modules/searchBox.module.css"

const SearchBoxContainerStyled = styled.section`
  display: flex;
  align-items: center;
  padding: 0.75rem;

  @media (max-width: 1294px) {
    flex-grow: 1;
  }

  @media (max-width: 1060px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1018px) {
    /* padding: 0.75rem, 0.75rem, 0, 0.75rem; */
    padding: 0.75rem 0.75rem 0 0.75rem;
  }

  .input-container {
    flex-grow: 1;
    display: flex;
    gap: 1rem;
    /* flex-direction: column; */
    align-items: center;
  }

  .search-label {
    margin: 0;
  }

  .search-input {
    /* width: 100%; */
    min-width: 30ch;
    color: rgb(187, 186, 186);
    border: 1px solid grey;
    border-radius: 10px;
    padding: 0.25rem;

    @media (max-width: 1294px) {
      flex-grow: 1;
    }
  }

  .filter-container {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    list-style: none;
    gap: 0.5rem;
    margin-bottom: 0;
    @media (max-width: 1054px) {
      margin: 0.5rem auto;
    }
  }

  .filter-item {
    padding-inline: 1rem;
    padding-block: 0;
    border: 1px solid grey;
    border-radius: 10px;
    margin-bottom: 0;
  }
`

const SearchBox = ({ queriedData, searchQuery, updateQuery }) => {
  console.log("here here here")
  console.table(queriedData)
  return (
    <SearchBoxContainerStyled>
      <label htmlFor="search" className={"input-container"}>
        <p className={"search-label"}>Search:</p>
        <input
          className={"search-input"}
          type="text"
          value={searchQuery}
          onChange={updateQuery}
          name="search"
          id="search"
          placeholder="searchable fields: type, department, problem, status"
        />
      </label>

      <ul className={"filter-container"}>
        <li className={"filter-item"}>assigned</li>
        <li className={"filter-item"}>unassigned</li>
        <li className={"filter-item"}>scheduled</li>
        <li className={"filter-item"}>denied</li>
      </ul>
    </SearchBoxContainerStyled>
  )
}

export default SearchBox
