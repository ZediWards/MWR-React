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
  }

  .filter-item > button {
    text-align: center;
    padding-inline: 1rem;
    padding-block: 0;
    border: 1px solid var(--gray-light);
    box-shadow: 0px 2px 1px var(--gray-light);
    border-radius: 10px;
    margin-bottom: 0;
    background-color: transparent;
    transition: all 0.35s ease-Out;
    cursor: pointer;
    :hover {
      background-color: hsl(var(--safety-mwr-hue), 50%, 90%);
    }
  }

  @media (max-width: 786px) {
    .search-input {
      min-width: 10ch;
    }
    .filter-container {
      margin: 0.5rem 0;
      margin-left: auto;
      flex-wrap: wrap;
    }

    .filter-item {
      flex-grow: 1;
    }
  }
  @media (max-width: 394px) {
    .input-container {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
`
// function filterBtn(e) {
//   console.log(`bubbled from target ${e.target.value}`)
//   return searchQuery(e.target.value)
// }

const SearchBox = ({ queriedData, searchQuery, updateQuery, updateStatusFilterBtnValue }) => {
  console.log("here here here")
  console.table(queriedData)
  console.log(searchQuery)
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

      <ul className={"filter-container"} onClick={updateStatusFilterBtnValue}>
        <li className={"filter-item"}>
          <button value="assigned">assigned</button>
        </li>
        <li className={"filter-item"}>
          <button value="unassigned">unassigned</button>
        </li>
        <li className={"filter-item"}>
          <button value="scheduled">scheduled</button>
        </li>
        <li className={"filter-item"}>
          <button value="denied">denied</button>
        </li>
      </ul>
    </SearchBoxContainerStyled>
  )
}

export default SearchBox
