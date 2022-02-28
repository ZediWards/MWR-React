import * as React from "react"
import { useState } from "react";

import ModalMwrForm from "./modalMwrForm"
import MwrForm from "./mwrForm"

import * as style from "../css_modules/mwr-cards.module.css"


const MwrCard = ({ mwrType, unAssigned, assigned, completed }) => {

  // state for modal
  // this needs to be added to each card, not the container
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div key={mwrType.index}>
      <p className={style.textCenter}>{mwrType} MWR</p>
      <div className={style.cardStats}>
        <div>
          <p className={style.textCenter}>Unassigned</p>
          <p className={style.textCenter}>{unAssigned.length}</p>
        </div>

        <div>
          <p className={style.textCenter}>Assigned</p>
          <p className={style.textCenter}>{assigned.length}</p>
        </div>

        <div>
          <p className={style.textCenter}>Completed</p>
          <p className={style.textCenter}>{completed.length}</p>
        </div>
      </div>

      <button className={style.btn} onClick={() => setIsOpen(true)} type="button">
        Create
      </button>

      <ModalMwrForm handleClose={() => setIsOpen(false)} isOpen={isOpen} mwrType={mwrType}>
        {mwrType}
      </ModalMwrForm>
    </div>


  )
}

export default MwrCard
