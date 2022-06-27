import * as React from "react"
import styled from "styled-components"

// just for the card class
// import * as style from "../css_modules/mwr-cards.module.css"

import MwrCard from "./mwrCard"

// ************************************************ styled components ************************
const CardsFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 896px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    /* border: solid 2px pink; */
  }
`

const MwrCards = ({ data, mwrTypes, handleClick }) => {
  const card = mwrTypes.map((type, index) => {
    const mwrType = data.filter(mwr => mwr.type === type.toLowerCase())
    const unAssignedMwrType = mwrType.filter(mwr => mwr.status === "unassigned")
    const assignedMwrType = mwrType.filter(mwr => mwr.status === "assigned")
    const completedMwrType = mwrType.filter(mwr => mwr.status === "completed")

    return (
      <MwrCard
        key={index}
        data={data}
        handleClick={handleClick}
        mwrType={type}
        unAssigned={unAssignedMwrType}
        assigned={assignedMwrType}
        completed={completedMwrType}
      />
    )
  })

  return <CardsFlexContainer>{card}</CardsFlexContainer>
}

export default MwrCards
