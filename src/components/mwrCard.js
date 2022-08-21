import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import ModalMwrFormContainer from "./modalMwrFormContainer";
// import MwrForm from "./mwrForm"

// import * as style from "../css_modules/mwr-cards.module.css"

// ********** Styled Components ***************
const StyledMwrCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* max-width: 25%; */
  flex-grow: 1;
  border-radius: 10px;
  border: 1px solid var(--gray-light);
  box-shadow: 0px 2px 1px var(--gray-light);
  padding: 1.5rem;
  background-color: var(--background-body);
  background-color: ${(prop) =>
    prop.mwrType === "General"
      ? "var(--background-general)"
      : prop.mwrType === "Safety"
        ? "var(--background-safety)"
        : "var(--background-urgent)"};
`;

const StyledMWRTitle = styled.h2`
  text-align: center;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const StyledStatsContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  /* border: 2px solid pink; */
  margin: 1rem 0 0 0;

  /* @media (min-width: 896px) and (max-width: 1255px) {
    gap: 1rem;
    justify-content: space-between;
  } */

  /* @media (min-width: 896px) and (max-width: 1255px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    max-width: max-content;
    margin: auto;
  } */

  @media (max-width: 424px) {
    flex-direction: column;
    justify-content: flex-start;
    /* gap: 0.5rem; */
    max-width: max-content;
    margin: auto;
  }
`;

const StyledStatContainer = styled.div`
  display: block;
  /* 1115 */
  /* @media (min-width: 896px) and (max-width: 1255px) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  } */
`;

const StyledButton = styled.button`
  display: block;
  margin: auto;
  width: 90%;
  margin-top: 1.5rem;
  background-color: var(--light-background);
  border: 1px solid var(--gray-light);
  border-radius: 10px;
  padding: 0.5rem 0.25rem;
  /*  */

  border: 1px solid var(--gray-light);
  box-shadow: 0px 2px 1px var(--gray-light);
  transition: all 0.35s ease-Out;
  cursor: pointer;
  &:hover {
    background-color: var(--transparent-light-background);
    border: 1px solid #fff;
    /* box-shadow: 0px 2px 1px #fff; */

    /* color: var(--light-background); */
    /* border: none; */
  }
`;

// .details-button:hover {
// background-color: var(--color-primary);
// color: var(--light-background);
// /* border: none; */
// }

const MwrCard = ({ mwrType, unAssigned, assigned, completed }) => {
  // state for modal
  // this needs to be added to each card, not the container
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledMwrCard mwrType={mwrType}>
      <StyledMWRTitle>{mwrType} MWR</StyledMWRTitle>
      <StyledStatsContainer>
        <StyledStatContainer>
          <StyledParagraph>Unassigned:</StyledParagraph>
          <StyledParagraph>{unAssigned.length}</StyledParagraph>
        </StyledStatContainer>

        <StyledStatContainer>
          <StyledParagraph>Assigned:</StyledParagraph>
          <StyledParagraph>{assigned.length}</StyledParagraph>
        </StyledStatContainer>

        <StyledStatContainer>
          <StyledParagraph>Completed:</StyledParagraph>
          <StyledParagraph>{completed.length}</StyledParagraph>
        </StyledStatContainer>
      </StyledStatsContainer>

      <StyledButton onClick={() => setIsOpen(true)} type="button">
        Create
      </StyledButton>

      <ModalMwrFormContainer
        mwrType={mwrType}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </StyledMwrCard>
  );
};

export default MwrCard;
