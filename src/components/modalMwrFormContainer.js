import * as React from "react"
// for modal
import { useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import ReactPortal from "./reactPortal"
import "../css_modules/modalStyles.css"
//

import MwrForm from "./mwrForm"

function ModalMwrFormContainer({
  data,
  handleClick,
  children,
  isOpen,
  handleClose,
  mwrType
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
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          <div className="modal-content">
            <MwrForm data={data} handleClick={handleClick} mwrType={mwrType} />
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}
export default ModalMwrFormContainer
