import * as React from "react";
import { useContext } from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext
} from "../context/GlobalContextProvider";

import styled from "styled-components";

// just for the card class
// import * as style from "../css_modules/mwr-cards.module.css"

import MwrCard from "./mwrCard";

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
`;

const MwrCards = ({ mwrTypes, data }) => {
  // context variables
  const state = useContext(GlobalStateContext);
  console.log("state DOT FILTER");
  console.table(state);

  // mapping through the different mwrTypes to make corrisponding card
  const card = mwrTypes.map((type, index) => {
    const mwrType = state.filter((mwr) => mwr.type === type.toLowerCase());
    const unAssignedMwrType = mwrType.filter(
      (mwr) => mwr.status === "unassigned"
    );
    const assignedMwrType = mwrType.filter((mwr) => mwr.status === "assigned");
    const completedMwrType = mwrType.filter(
      (mwr) => mwr.status === "completed"
    );

    return (
      <MwrCard
        key={index}
        // data={data}
        // handleClick={handleClick}
        mwrType={type}
        unAssigned={unAssignedMwrType}
        assigned={assignedMwrType}
        completed={completedMwrType}
      />
    );
  });

  return <CardsFlexContainer>{card}</CardsFlexContainer>;
};

export default MwrCards;
