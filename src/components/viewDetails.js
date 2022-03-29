import * as React from "react"
import { useState } from "react"

import * as style from "../css_modules/viewDetailsStyles.module.css"

const ViewDetails = ({ mwrDetails, handleClick, handleClose }) => {
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
    <form className={style.detailsForm} onSubmit={handleSubmit}>
      <h1 className={style.textCenter}>MWR Submition</h1>

      <div className={style.employeeInput}>
        <fieldset className={style.fieldsetFlex}>
          <legend>Employee Inputs:</legend>

          <div className={style.empInputSectOne}>
            <label htmlFor="date">
              <p className={style.inputLabel}>Date:</p>
              <input
                // onChange={e => setFormData({ ...formData, date: e.target.value })}
                value={mwrDetails.date}
                type="date"
                name="date"
                id="date"
                className={style.inputReadableDisabled}
                disabled="true"
              />
            </label>

            <label htmlFor="department">
              <p className={style.inputLabel}>Department:</p>
              <select
                // onChange={e =>
                //   setFormData({ ...formData, department: e.target.value })
                // }
                value={mwrDetails.department}
                name="department"
                id="department"
                className={style.inputReadableDisabled}
                disabled="true"
              >
                <option value="shipping">Shipping</option>
                <option value="production">Production</option>
                <option value="compounding">Compounding</option>
              </select>
            </label>

            <label htmlFor="name">
              <p className={style.inputLabel}>Name:</p>
              <input
                // onChange={e => setFormData({ ...formData, name: e.target.value })}
                value={mwrDetails.name}
                type="text"
                name="name"
                id="name"
                className={style.inputReadableDisabled}
                disabled="true"
              />
            </label>
          </div>

          <div className={style.empInputSectTwo}>
            <label htmlFor="problem">
              <p className={style.inputLabel}>Problem:</p>
              <textarea
                // onChange={e => setFormData({ ...formData, problem: e.target.value })}
                value={mwrDetails.problem}
                name="problem"
                id="problem"
                className={style.inputReadableDisabled}
                disabled="true"
                rows="5"
                cols="75"
              ></textarea>
            </label>

            <label htmlFor="solution">
              <p className={style.inputLabel}>Solution:</p>
              <textarea
                // onChange={e => setFormData({ ...formData, solution: e.target.value })}
                value={mwrDetails.solution}
                name="solution"
                id="solution"
                className={style.inputReadableDisabled}
                disabled="true"
                rows="5"
                cols="75"
              ></textarea>
            </label>
          </div>
        </fieldset>
        <fieldset className={style.fieldsetFlex}>
          <legend>Maintenance:</legend>

          <div className={style.flexTwo}>
            <div>
              <label htmlFor="work-order-num" className={style.flex}>
                <p className={style.inputLabel}>Work Order Number:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  value={mwrDetails.date}
                  type="text"
                  name="work-order-num"
                  id="work-order-num"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                  // disabled="true"
                />
              </label>
              <label htmlFor="work-order-date" className={style.flex}>
                <p className={style.inputLabel}>Work Order Date:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  value={mwrDetails.date}
                  type="date"
                  name="work-order-date"
                  id="work-order-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
              <label htmlFor="work-order-time" className={style.flex}>
                <p className={style.inputLabel}>Work Order Time:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  // value={mwrDetails.date}
                  type="time"
                  name="work-order-time"
                  id="work-order-time"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                  // disabled="true"
                />
              </label>
              <label htmlFor="project-num" className={style.flex}>
                <p className={style.inputLabel}>Project Number:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  // value={mwrDetails.date}
                  type="text"
                  name="project-num"
                  id="project-num"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
              <label htmlFor="scheduled-date" className={style.flex}>
                <p className={style.inputLabel}>Scheduled Date:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  // value={mwrDetails.date}
                  type="date"
                  name="scheduled-date"
                  id="scheduled-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
            </div>

            <div>
              <label htmlFor="work-order-num" className={style.flex}>
                <p className={style.inputLabel}>Work Order Number:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  value={mwrDetails.date}
                  type="text"
                  name="work-order-num"
                  id="work-order-num"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
              <label htmlFor="work-order-date" className={style.flex}>
                <p className={style.inputLabel}>Work Order Date:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  value={mwrDetails.date}
                  type="date"
                  name="work-order-date"
                  id="work-order-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
              <label htmlFor="work-order-time" className={style.flex}>
                <p className={style.inputLabel}>Work Order Time:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  // value={mwrDetails.date}
                  type="time"
                  name="work-order-time"
                  id="work-order-time"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
              <label htmlFor="project-num" className={style.flex}>
                <p className={style.inputLabel}>Project Number:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  // value={mwrDetails.date}
                  type="text"
                  name="project-num"
                  id="project-num"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
              <label htmlFor="scheduled-date" className={style.flex}>
                <p className={style.inputLabel}>Scheduled Date:</p>
                <input
                  // onChange={e => setFormData({ ...formData, date: e.target.value })}
                  // value={mwrDetails.date}
                  type="date"
                  name="scheduled-date"
                  id="scheduled-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                  // disabled="true"
                />
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <input type="submit" value="Submit" className={style.formBtn} />
    </form>
  )
}

export default ViewDetails
