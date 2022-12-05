import * as React from "react";
import { useContext } from "react";

import {
  GlobalStateContext,
  GlobalSettingsContext,
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

const MwrCards = () => {
  // context variables
  const state = useContext(GlobalStateContext);
  const settings = useContext(GlobalSettingsContext)

  // default 3 mwr types
  const mwrType1 = settings.mwrTypes[0].index
  const mwrType2 = settings.mwrTypes[1].type
  const mwrType3 = settings.mwrTypes[2].type
  const mwrTypeArr = settings.mwrTypes

  const tyop = mwrTypeArr.indexOf([0])
  console.log(tyop)

  mwrTypeArr.map((item, index) => {
    console.log(index)
  })
  // text.indexOf("welcome")


  // mapping through the different mwrTypes to make corrisponding card
  const card = settings.mwrTypes.map((item, index) => {
    const mwrType = state.filter((mwr) => mwr.type === item.type.toLowerCase());
    const unAssignedMwrType = mwrType.filter(
      (mwr) => mwr.status === "unassigned"
    );
    const assignedMwrType = mwrType.filter((mwr) => mwr.status === "assigned");
    const completedMwrType = mwrType.filter(
      (mwr) => mwr.status === "completed"
    );
    console.log(index)

    return (
      <MwrCard
        key={index}
        index={index}
        mwrType={item}
        unAssigned={unAssignedMwrType}
        assigned={assignedMwrType}
        completed={completedMwrType}
        mwrType1={mwrType1}
        mwrType2={mwrType2}
        mwrType3={mwrType3}
      />
    );
  });

  return <CardsFlexContainer>{card}</CardsFlexContainer>;
};

export default MwrCards;
