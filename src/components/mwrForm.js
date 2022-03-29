import * as React from "react"
import { useState } from "react"

import * as style from "../css_modules/formStyles.module.css"

const MwrForm = ({ data, handleClick, mwrType, handleClose }) => {
  // console.table(data)
  const [formData, setFormData] = useState({
    type: "gemeral",
    date: "",
    name: "",
    department: "",
    problem: "",
    solution: "",
    status: "unassigned"
  })

  const handleSubmit = e => {
    e.preventDefault()
    handleClick(formData)
    setFormData({
      type: "gemeral",
      date: "",
      name: "",
      department: "",
      problem: "",
      solution: "",
      status: "unassigned"
    })
    handleClose()
    // pass this as a function to set state from the child
    // setIsOpen(true)
  }

  //

  //
  return (
    <form onSubmit={handleSubmit}>
      <h1>{mwrType} MWR Form</h1>

      <label htmlFor="date">
        <p className={style.inputLabel}>Date:</p>
        <input
          onChange={e => setFormData({ ...formData, date: e.target.value })}
          value={formData.date}
          type="date"
          name="date"
          id="date"
          className={style.formInput}
        />
      </label>

      <label htmlFor="name">
        <p className={style.inputLabel}>Name:</p>
        <input
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          type="text"
          name="name"
          id="name"
          className={style.formInput}
        />
      </label>

      <label htmlFor="department">
        <p className={style.inputLabel}>Department:</p>
        <select
          onChange={e =>
            setFormData({ ...formData, department: e.target.value })
          }
          value={formData.department}
          name="department"
          id="department"
          className={style.formInput}
        >
          <option value="shipping">Shipping</option>
          <option value="production">Production</option>
          <option value="compounding">Compounding</option>
        </select>
      </label>

      <label htmlFor="problem">
        <p className={style.inputLabel}>Problem:</p>
        <textarea
          onChange={e => setFormData({ ...formData, problem: e.target.value })}
          value={formData.problem}
          name="problem"
          id="problem"
          className={style.formInput}
          rows="5"
          cols="75"
        ></textarea>
      </label>

      <label htmlFor="solution">
        <p className={style.inputLabel}>Solution:</p>
        <textarea
          onChange={e => setFormData({ ...formData, solution: e.target.value })}
          value={formData.solution}
          name="solution"
          id="solution"
          className={style.formInput}
          rows="5"
          cols="75"
        ></textarea>
      </label>

      <input type="submit" value="Submit" className={style.formBtn} />
    </form>
  )
}

export default MwrForm
