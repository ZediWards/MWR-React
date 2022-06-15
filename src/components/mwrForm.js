import * as React from "react"
import { useState } from "react"
import styled from "styled-components"

// import * as style from "../css_modules/formStyles.module.css"

// **** Styled Components ****
const MwrFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* margin: 150px 20px 20px; */

  .heading-and-close-container {
    display: flex;
    justify-content: space-between;
  }

  .form-heading {
    margin: 0;
  }

  .close-btn {
    background-color: var(--background-safety);
    border: 1px solid var(--gray-light);
    box-shadow: 0px 2px 1px var(--gray-light);
    color: var(--text-black);
    transition: all 0.35s ease-Out;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    /* display: block; */
    :hover {
      background-color: var(--background-safety);
      color: var(--light-background);
    }
  }

  label {
    flex-grow: 1;
  }

  .problem-label,
  .solution-label {
    flex-grow: 1;
  }

  .input-label {
    margin-block: 0.5rem;
    margin-inline: 0;
    font-size: 1.25rem;
  }

  .form-input {
    margin-bottom: 0.5rem;
  }

  .form-btn {
    display: block;
    padding: 0.75rem;
    width: 100%;
    margin-block: 1rem;
    text-align: center;
    background-color: rgb(191, 211, 166);
  }

  @media (max-width: 409px) {
    .close-btn {
      align-self: flex-start;
      margin-top: 0.25rem;
    }
  }

  @media (max-width: 670px) {
    .problem-label,
    .solution-label {
      flex-grow: 1;
    }
    .problem-input,
    .solution-input {
      width: 100%;
      /* background-color: pink; */
    }
  }

  /* !!!!!!!!!! Details Style !!!!!!!! */
  /* .input-readable-disabled {
    background-color: white;
    color: black;
    margin-bottom: 0.5rem;
  } */
`

// lesson learned: multiple classes
let problemTextAreaClasses = ["problem-input form-input"]
let solutionTextAreaClasses = ["solution-input form-input"]

const MwrForm = ({ data, handleClick, mwrType, handleClose }) => {
  const [formData, setFormData] = useState({
    // Employee section
    type: mwrType,
    date: "",
    name: "",
    department: "",
    problem: "",
    solution: "",
    // Maininence Section
    status: "unassigned",
    workOrderNum: "",
    workOrderDate: "",
    workOrderTime: "",
    projectNum: "",
    scheduledDate: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    handleClick(formData)
    setFormData({
      // Employee section
      type: mwrType,
      date: "",
      name: "",
      department: "",
      problem: "",
      solution: "",
      // Maininence Section
      status: "unassigned",
      workOrderNum: "",
      workOrderDate: "",
      workOrderTime: "",
      projectNum: "",
      scheduledDate: ""
    })
    handleClose()
    // pass this as a function to set state from the child
    // setIsOpen(true)
  }

  //

  //
  return (
    <MwrFormStyled onSubmit={handleSubmit}>
      <div className="heading-and-close-container">
        <h1 className={"form-heading"}>{mwrType} MWR Form</h1>
        <button onClick={handleClose} className="close-btn">
          X
        </button>
      </div>

      <label htmlFor="date">
        <p className="input-label">Date:</p>
        <input
          onChange={e => setFormData({ ...formData, date: e.target.value })}
          value={formData.date}
          type="date"
          name="date"
          id="date"
          className="form-input"
        />
      </label>
      <label htmlFor="name">
        <p className="input-label">Name:</p>
        <input
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          type="text"
          name="name"
          id="name"
          className="form-input"
        />
      </label>
      <label htmlFor="department">
        <p className="input-label">Department:</p>
        <select
          onChange={e =>
            setFormData({ ...formData, department: e.target.value })
          }
          value={formData.department}
          name="department"
          id="department"
          className="form-input"
        >
          <option value="shipping">Shipping</option>
          <option value="production">Production</option>
          <option value="compounding">Compounding</option>
        </select>
      </label>
      <label htmlFor="problem" className="problem-label">
        <p className="input-label">Problem:</p>
        <textarea
          onChange={e => setFormData({ ...formData, problem: e.target.value })}
          value={formData.problem}
          name="problem"
          id="problem"
          className={problemTextAreaClasses}
          rows="5"
          cols="75"
        ></textarea>
      </label>
      <label htmlFor="solution" className="solution-label">
        <p className="input-label">Solution:</p>
        <textarea
          onChange={e => setFormData({ ...formData, solution: e.target.value })}
          value={formData.solution}
          name="solution"
          id="solution"
          className={solutionTextAreaClasses}
          rows="5"
          cols="75"
        ></textarea>
      </label>
      <input type="submit" value="Submit" className="form-btn" />
    </MwrFormStyled>
  )
}

export default MwrForm
