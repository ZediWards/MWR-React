import * as React from "react";
import { useState, useContext } from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext
} from "../context/GlobalContextProvider";

import styled from "styled-components";

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

  /* lesson learned: element selector is giving problems with wieght. applying a class to item still doesn't outweigh the element child selector */
  /* .filter-item > button {
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
  } */
  li {
    margin-bottom: 0;
  }

  .filter-item {
    text-align: center;
    padding-inline: 1rem;
    padding-block: 0;
    border: 1px solid threedlightshadow;
    box-shadow: 0px 2px 1px var(--gray-light);
    border-radius: 10px;
    margin-bottom: 0;
    background-color: transparent;
    /* TODO how to have transition without the weird border effect? */
    /* transition: all 0.35s ease-Out; */
    cursor: pointer;
    /* :hover {
      background-color: hsl(var(--safety-mwr-hue), 50%, 90%);
    } */
  }

  @media (hover: hover) and (pointer: fine) {
    .filter-item:hover {
      background-color: hsl(var(--safety-mwr-hue), 50%, 90%);
    }
  }

  .filter-item-selected {
    text-align: center;
    padding-inline: 1rem;
    padding-block: 0;
    border: 1px solid var(--gray-light);
    box-shadow: 0px 2px 1px var(--gray-light);
    border-radius: 10px;
    margin-bottom: 0;
    background-color: hsl(var(--safety-mwr-hue), 50%, 90%);
    /* border: 1px solid hsl(var(--safety-mwr-hue), 50%, 90%);
    box-shadow: 0px 2px 1px hsl(var(--safety-mwr-hue), 50%, 90%); */
    transition: all 0.35s ease-Out;
    cursor: pointer;
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
`;

function updateBtnClassName(e) {
  e.target.className = "selected-btn";
}

const SearchBox = ({
  getSearchResults,
  searchQuery,
  updateQuery,
  updatePrimaryFilter
}) => {
  // context variables
  const state = useContext(GlobalStateContext);

  // // *********** Search functionality ******************

  // // searching state db
  // // searching state db
  // const [searchQuery, setSearchQuery] = useState("");

  // const [
  //   columnsIncludedWithinSearch,
  //   setColumnsIncludedWithinSearch
  // ] = useState(["type", "department", "problem", "status"]);
  // // source for search https://github.com/devmentorlive/datatable-search-filter/blob/master/src/app/index.jsx
  // // .filter returns a new array with items that meet our condition.
  // // .some returns true/false. It does not modify the array
  // // gives us the keys or our db

  // // plain speak:
  // // return the {} in the [] from our db IF
  // // any of that objects keys that is in setColumnsIncludedWithinSearch [] AND
  // // that keys value gives a positve value with (.indexOf(searchQuery.toLowerCase()) > -1)
  // // ******** Primary Filter States
  // const [primaryFilter, setPrimaryFilter] = useState("");
  // const [primaryFilterBool, setPrimaryFilterBool] = useState(false);

  // // pass this down to the btns in searchbar component
  // const updatePrimaryFilter = (e) => {
  //   // setPrimaryFilter("")
  //   // setPrimaryFilterBool(false)
  //   e.target.parentElement.parentElement.childNodes.forEach((item) => {
  //     if (
  //       e.target.value === item.textContent &&
  //       e.target.value !== primaryFilter
  //     ) {
  //       setPrimaryFilter(e.target.value);
  //       setPrimaryFilterBool(true);
  //       item.children[0].className = "filter-item-selected";
  //     } else if (
  //       e.target.value === item.textContent &&
  //       e.target.value === primaryFilter
  //     ) {
  //       item.children[0].className = "filter-item";
  //       setPrimaryFilter("");
  //       setPrimaryFilterBool(false);
  //       item.children[0].className = "filter-item";
  //     } else {
  //       item.children[0].className = "filter-item";
  //     }
  //   });
  // };

  // // ********** Primary FIlter included in search(db) function  ***WORKS***
  // function search(state) {
  //   if (primaryFilterBool === true) {
  //     const primaryFilteredDb = state.filter(
  //       (item) => item.status === primaryFilter
  //     );
  //     const searchedDb = primaryFilteredDb.filter((dataRow) =>
  //       columnsIncludedWithinSearch.some(
  //         (column) =>
  //           dataRow[column]
  //             .toString()
  //             .toLowerCase()
  //             // positive number if there is a match
  //             // try and length of value === length of indexOf...
  //             .indexOf(searchQuery.toLowerCase()) > -1
  //       )
  //     );
  //     return searchedDb;
  //   } else {
  //     return state.filter((dataRow) =>
  //       columnsIncludedWithinSearch.some(
  //         (column) =>
  //           dataRow[column]
  //             .toString()
  //             .toLowerCase()
  //             // positive number if there is a match
  //             // try and length of value === length of indexOf...
  //             .indexOf(searchQuery.toLowerCase()) > -1
  //       )
  //     );
  //   }
  // }

  // *******************************works
  // function search(db) {
  //   return db.filter(dataRow =>
  //     columnsIncludedWithinSearch.some(
  //       column =>
  //         dataRow[column]
  //           .toString()
  //           .toLowerCase()
  //           // positive number if there is a match
  //           // try and length of value === length of indexOf...
  //           .indexOf(searchQuery.toLowerCase()) > -1
  //     )
  //   )
  // }

  // // will pass this as search component prop, calls and update state defined here
  // const updateQuery = (e) => {
  //   setSearchQuery(e.target.value);
  //   getSearchResults(state);
  // };
  // getSearchResults(state);

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
          placeholder="type, department, problem, status"
        />
      </label>

      <ul className={"filter-container"} onClick={updatePrimaryFilter}>
        <li>
          <button className={"filter-item"} value="assigned">
            assigned
          </button>
        </li>
        <li>
          <button className={"filter-item"} value="unassigned">
            unassigned
          </button>
        </li>
        <li>
          <button className={"filter-item"} value="completed">
            completed
          </button>
        </li>
        <li>
          <button className={"filter-item"} value="denied">
            denied
          </button>
        </li>
      </ul>
    </SearchBoxContainerStyled>
  );
};

export default SearchBox;
