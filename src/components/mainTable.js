import * as React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import {
  GlobalDispatchContext,
  GlobalStateContext
} from "../context/GlobalContextProvider";

import SearchBox from "./searchBox";
import ViewDetailsBtn from "./viewDetailsBtn";

// ******* Styled Components ***************
const SectionForTableStyled = styled.section`
  margin-top: 1.45rem;
  overflow-x: hidden;

  .header-search-container {
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid blue; */
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.725rem;
  }

  h2 {
    /* border: 1px solid purple; */
    margin: 0;
  }

  .table-container {
    /* makes table inside container responsive scroll */
    overflow-x: auto;
  }

  .main-table {
    /* overflow-x: scroll; */

    td {
      text-align: center;
    }
    th {
      background-color: hsl(var(--general-mwr-hue), 50%, 90%);
      text-align: center;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      transition: all 0.35s ease-Out;
      background-color: var(--table-hover-background-color);
    }
  }
`;
// Truncating problem string
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

const FullTable = ({
  // queriedData,
  // searchQuery,
  // updateQuery,
  mwrTypes,
  handleUpdate
  // updatePrimaryFilter
}) => {
  // context variables
  const state = useContext(GlobalStateContext);
  console.log("state FROM MAINTABLE");
  console.table(state);
  //
  // const [tableData, setTableData] = useState(state);

  // // adds object to db state
  // const getSearchResults = (searchResults) => {
  //   // example of adding item to the state array
  //   setTableData([searchResults]);
  // };

  // *********** Search functionality ******************

  // searching state db
  // searching state db
  const [searchQuery, setSearchQuery] = useState("");

  const [
    columnsIncludedWithinSearch,
    setColumnsIncludedWithinSearch
  ] = useState(["type", "department", "problem", "status"]);
  // source for search https://github.com/devmentorlive/datatable-search-filter/blob/master/src/app/index.jsx
  // .filter returns a new array with items that meet our condition.
  // .some returns true/false. It does not modify the array
  // gives us the keys or our db

  // plain speak:
  // return the {} in the [] from our db IF
  // any of that objects keys that is in setColumnsIncludedWithinSearch [] AND
  // that keys value gives a positve value with (.indexOf(searchQuery.toLowerCase()) > -1)
  // ******** Primary Filter States
  const [primaryFilter, setPrimaryFilter] = useState("");
  const [primaryFilterBool, setPrimaryFilterBool] = useState(false);

  // pass this down to the btns in searchbar component
  const updatePrimaryFilter = (e) => {
    // setPrimaryFilter("")
    // setPrimaryFilterBool(false)
    e.target.parentElement.parentElement.childNodes.forEach((item) => {
      if (
        e.target.value === item.textContent &&
        e.target.value !== primaryFilter
      ) {
        setPrimaryFilter(e.target.value);
        setPrimaryFilterBool(true);
        item.children[0].className = "filter-item-selected";
      } else if (
        e.target.value === item.textContent &&
        e.target.value === primaryFilter
      ) {
        item.children[0].className = "filter-item";
        setPrimaryFilter("");
        setPrimaryFilterBool(false);
        item.children[0].className = "filter-item";
      } else {
        item.children[0].className = "filter-item";
      }
    });
  };

  // ********** Primary FIlter included in search(db) function  ***WORKS***
  function search(state) {
    if (primaryFilterBool === true) {
      const primaryFilteredDb = state.filter(
        (item) => item.status === primaryFilter
      );
      const searchedDb = primaryFilteredDb.filter((dataRow) =>
        columnsIncludedWithinSearch.some(
          (column) =>
            dataRow[column]
              .toString()
              .toLowerCase()
              // positive number if there is a match
              // try and length of value === length of indexOf...
              .indexOf(searchQuery.toLowerCase()) > -1
        )
      );
      return searchedDb;
    } else {
      return state.filter((dataRow) =>
        columnsIncludedWithinSearch.some(
          (column) =>
            dataRow[column]
              .toString()
              .toLowerCase()
              // positive number if there is a match
              // try and length of value === length of indexOf...
              .indexOf(searchQuery.toLowerCase()) > -1
        )
      );
    }
  }

  // will pass this as search component prop, calls and update state defined here
  const updateQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  // building table data
  //! ** might be able to use the state to map the table, since not mutating anything, won't need to worry about setState **
  // queried data is using context state
  const buildTableBody = search(state).map((mwr, index) => {
    return (
      <tr key={index}>
        <td>{mwr.date}</td>
        <td>{mwr.department}</td>
        <td>{truncateString(mwr.problem, 30)}</td>
        <td>{mwr.status}</td>
        <td>
          {/* button will be same as "create" btn on mwr card, modal pops up with fields to populate */}
          <ViewDetailsBtn
            mwrDetails={mwr}
            mwrIndex={index}
            mwrTypes={mwrTypes}
            handleUpdate={handleUpdate}
          />
        </td>
      </tr>
    );
  });

  return (
    <SectionForTableStyled>
      <div className={"header-search-container"}>
        <h2>MWR Submitions</h2>
        <SearchBox
          // queriedData={queriedData}
          // getSearchResults={getSearchResults}
          searchQuery={searchQuery}
          updateQuery={updateQuery}
          updatePrimaryFilter={updatePrimaryFilter}
        />
      </div>
      <div className={"table-container"}>
        <table className={"main-table"}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Department</th>
              <th>Problem</th>
              <th>Status</th>
              {/* later do ternary if logged in then display Details head item */}
              <th>Detials</th>
            </tr>
          </thead>
          <tbody>{buildTableBody}</tbody>
        </table>
      </div>
    </SectionForTableStyled>
  );
};

export default FullTable;
