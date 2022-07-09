import * as React from "react"
import { useState } from "react"
import styled from "styled-components"

import ViewDetailsModalContainer from "./viewDetailsModalContainer"

// import * as style from "../css_modules/mwr-cards.module.css"

// **** Styled Components ****
const DetailsBtn = styled.button`
  background-color: var(--light-background);
  border: 1px solid var(--background-general);
  box-shadow: 0px 2px 1px var(--gray-light);
  color: var(--text-black);
  transition: all 0.35s ease-Out;
  cursor: pointer;
  /* width: 100%; */
  min-width: min-content;
  padding: 0.5rem;
  margin: auto;
  font-size: 16px;
  border-radius: 10px;
  display: block;
  :hover {
    background-color: hsl(var(--general-mwr-hue), 50%, 90%);
    /* border: 1px solid #fff; */
    /* color: var(--light-background); */
    /* border: none; */
  }

  @media (max-width: 1000px) {
    min-width: max-content;
  }
`




const ViewDetailsBtn = ({ mwrDetails, mwrTypes, handleUpdate }) => {
  // state for modal
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <DetailsBtn
        // className={style.btn}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        View Details
      </DetailsBtn>

      <ViewDetailsModalContainer
        mwrDetails={mwrDetails}
        mwrTypes={mwrTypes}
        handleUpdate={handleUpdate}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  )
}

export default ViewDetailsBtn
