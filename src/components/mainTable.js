import * as React from "react"
import styled from "styled-components"

import SearchBox from "./searchBox"
import ViewDetailsBtn from "./viewDetailsBtn"

import * as style from "../css_modules/fullTable.module.css"

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
      /* background-color: coral; */
      background-color: rgba(255, 127, 80, 0.25);
    }
  }
`

const FullTable = ({ queriedData, searchQuery, updateQuery, mwrTypes, handleUpdate, updatePrimaryFilter }) => {
  // building table data
  //! ** might be able to use the state to map the table, since not mutating anything, won't need to worry about setState **
  const buildTableBody = queriedData.map((mwr, index) => {
    return (
      <tr key={index}>
        <td className={style.textCenter}>{mwr.date}</td>
        <td className={style.textCenter}>{mwr.department}</td>
        <td className={style.textCenter}>{mwr.problem}</td>
        <td className={style.textCenter}>{mwr.status}</td>
        <td className={style.textCenter}>
          {/* button will be same as "create" btn on mwr card, modal pops up with fields to populate */}
          <ViewDetailsBtn
            mwrDetails={mwr}
            mwrIndex={index}
            mwrTypes={mwrTypes}
            handleUpdate={handleUpdate}
          />
        </td>
      </tr>
    )
  })

  return (
    <SectionForTableStyled>
      <div className={"header-search-container"}>
        <h2>MWR Submitions</h2>
        <SearchBox
          queriedData={queriedData}
          searchQuery={searchQuery}
          updateQuery={updateQuery}
          updatePrimaryFilter={updatePrimaryFilter}
        />
      </div>
      <div className={"table-container"}>
        <table className={"main-table"}>
          <thead>
            <tr>
              <th className={style.textCenter}>Date</th>
              <th className={style.textCenter}>Department</th>
              <th className={style.textCenter}>Problem</th>
              <th className={style.textCenter}>Status</th>
              {/* later do ternary if logged in then display Details head item */}
              <th className={style.textCenter}>Detials</th>
            </tr>
          </thead>
          <tbody>{buildTableBody}</tbody>
        </table>
      </div>

    </SectionForTableStyled>
  )
}

export default FullTable
