import * as React from "react"
import { useState } from "react"

import ViewDetailsModalContainer from "./viewDetailsModalContainer"

// import * as style from "../css_modules/mwr-cards.module.css"

const ViewDetailsBtn = ({ mwrDetails, handleClick }) => {
  // state for modal
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        // className={style.btn}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        working?
      </button>

      <ViewDetailsModalContainer
        mwrDetails={mwrDetails}
        handleClick={handleClick}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  )
}

export default ViewDetailsBtn
