export function search(state) {
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
