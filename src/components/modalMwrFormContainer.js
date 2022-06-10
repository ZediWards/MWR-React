import * as React from "react"
import styled from "styled-components"
// for modal
import { useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import ReactPortal from "./reactPortal"
import "../css_modules/modalStyles.css"
//

import MwrForm from "./mwrForm"

const StyledModalContent = styled.div`
  /* width: 70%; */
  /* height: 70%; */
  /* background-color: #282c34; */
  background-color: #ffffff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-size: 1.5rem; */
  padding: 1.5rem;

  @media (max-width: 670px) {
    position: absolute;
    left: 0;
    top: 0;
  }
`

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
          <StyledModalContent>
            <MwrForm
              data={data}
              handleClick={handleClick}
              mwrType={mwrType}
              handleClose={handleClose}
            />
          </StyledModalContent>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}
export default ModalMwrFormContainer
