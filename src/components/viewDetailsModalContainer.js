import * as React from "react"
// for modal
import { useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import ReactPortal from "./reactPortal"

import "../css_modules/modalStyles.css"
//

import ViewDetails from "./viewDetails"

function ViewDetailsModalContainer({
  mwrDetails,
  mwrIndex,
  handleUpdate,
  children,
  isOpen,
  handleClose
}) {
  // for react-transition-group
  const nodeRef = useRef(null)

  // to close modal and cleanup afterwards
  useEffect(() => {
    const closeOnEscapeKey = e => (e.key === "Escape" ? handleClose() : null)
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [handleClose])

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="details-modal-content">
            <button onClick={handleClose} className="close-btn">
              X
            </button>
            <ViewDetails
              mwrDetails={mwrDetails}
              mwrIndex={mwrIndex}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}
export default ViewDetailsModalContainer
