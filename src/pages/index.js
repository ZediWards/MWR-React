import * as React from "react";
import { useState, useEffect, useContext } from "react";

// *************** gatsby auth tutorial
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
// ******************** end of gatsby auth tutorial

import {
  GlobalSettingsContext,
  GlobalStateContext
} from "../context/GlobalContextProvider";

import Layout from "../components/layout";
import MwrCards from "../components/mwrCards";
// import MwrCardsCopy from "../components/mwrCards-copy";
import Leaderboard from "../components/leaderboard";
// import SearchBox from "../components/searchBox"
import FullTable from "../components/mainTable";

const IndexPage = () => {
  // context variables
  const state = useContext(GlobalStateContext);
  const settings = useContext(GlobalSettingsContext)
  console.log("settings FROM INDEX");
  console.table(settings);


  // Lesson learned: anytime referencing these to data{} need to add .toLowerCase()
  // const [mwrTypes, setMwrTypes] = useState(["General", "Urgent", "Safety"]);

  // ************************************ MOVED LOCAL STORAGE TO GLOBAL CONTEXT ****************************************
  // local storage persistance setup
  // setting second parameter of useEffect as [] means it will only run the first tome the page loads
  // on pageLoad, if lacaDb exists, then setdB to that, if not then setDb will be default
  // useEffect(() => {
  //   const localDb = window.localStorage.getItem("localDb");
  //   if (localDb !== null) setDb(JSON.parse(localDb));
  // }, []);

  // local storage setup storage
  // seocond param set to [db] means it will fire on page/component load & if db updates
  // useEffect(() => {
  //   window.localStorage.setItem("localDb", JSON.stringify(db));
  // }, [db]);

  // adds object to db state
  // const handleClick = (formData) => {
  //   // example of adding item to the state array
  //   setDb([...db, formData]);
  // };

  // updates an object already in db state
  // const handleUpdate = (mwrData, mwrIndex) => {
  //   // logging correct item
  //   const updatedDb = db.map((item) => {
  //     if (item.id === mwrData.id) {
  //       return mwrData;
  //     }
  //     return item;
  //   });
  //   setDb([...updatedDb]);
  // };

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
  // function search(db) {
  //   if (primaryFilterBool === true) {
  //     const primaryFilteredDb = db.filter(
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
  //     return db.filter((dataRow) =>
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

  // // *******************************works
  // // function search(db) {
  // //   return db.filter(dataRow =>
  // //     columnsIncludedWithinSearch.some(
  // //       column =>
  // //         dataRow[column]
  // //           .toString()
  // //           .toLowerCase()
  // //           // positive number if there is a match
  // //           // try and length of value === length of indexOf...
  // //           .indexOf(searchQuery.toLowerCase()) > -1
  // //     )
  // //   )
  // // }

  // // will pass this as search component prop, calls and update state defined here
  // const updateQuery = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <Layout>
      <div>
        {/* ************** gatsby AUTH tutorial */}
        {/* <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1> */}
        {/* lesson: using ternary operator to render different components or jsx */}
        {/* <p>
          {isLoggedIn() ? (
            <>
              You are logged in, so check your{" "}
              <Link to="/app/profile">profile</Link>
            </>
          ) : (
            <>
              You should <Link to="/app/login">log in</Link> to see restricted
              content
            </>
          )}
        </p> */}

        {/* ***************** end of Gatsby auth tutorial */}
        <MwrCards />
        <Leaderboard />
        <FullTable />
      </div>
    </Layout>
  );
};

export default IndexPage;
