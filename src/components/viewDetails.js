import * as React from "react"
import { useState } from "react"

import styled from "styled-components"

// import { PDFViewer } from "@react-pdf/renderer"
// import { PdfDocument } from "./pdfTemplate"

import * as style from "../css_modules/viewDetailsStyles.module.css"

// **** Styled Components ****
const DetailsFormStyled = styled.form`
  display: flex;
  max-width: 100%;
  flex-direction: column;

  .legend {
    background-color: hsl(var(--general-mwr-hue), 50%, 90%);
    padding-inline: 0.5rem;
  }

  .flex-row-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`

const ViewDetails = ({
  mwrDetails,
  mwrIndex,
  handleUpdate,
  handleClose,
  mwrTypes
}) => {
  console.table(mwrDetails)
  // console.table(mwrDetails.id)

  // **************** varibles for mapping inside form********************
  const assignedDepartments = [
    " Production Maintenance",
    "Building Maintneance"
  ]
  const mappedAssignedDepartments = assignedDepartments.map(
    (department, index) => {
      return (
        <option key={index} value={department}>
          {department}
        </option>
      )
    }
  )

  // production maintenance
  const productionMaintenanceEmployees = ["Jon", "Bob", "Jim"]
  const mappedProductionMaintenanceEmployees = productionMaintenanceEmployees.map(
    (employee, index) => {
      return (
        <option key={index} value={employee}>
          {employee}
        </option>
      )
    }
  )

  // building maintenance
  const buildingMaintenanceEmployees = ["Matt", "Sara"]
  const mappedBuildingMaintenanceEmployees = buildingMaintenanceEmployees.map(
    (employee, index) => {
      return (
        <option key={index} value={employee}>
          {employee}
        </option>
      )
    }
  )

  // all maintenance
  const allMaintenanceEmployees = [
    ...productionMaintenanceEmployees,
    ...buildingMaintenanceEmployees
  ]
  const mappedAllMaintenanceEmployees = allMaintenanceEmployees.map(
    (employee, index) => {
      return (
        <option key={index} value={employee}>
          {employee}
        </option>
      )
    }
  )

  // function that creats option map that can pass arr into
  // job status change if department is not undefined
  // open/history?

  const problemType = ["electrical", "structural", "plumbing", "outside contractor"]
  const mappedProblemTypes = problemType.map((problemType, index) => {
    return (
      <option key={index} value={problemType}>
        {problemType}
      </option>
    )
  })

  // mwrTypes from props
  const mappedMwrTypes = mwrTypes.map((type, index) => {
    return (
      <option key={index} value={type.toLowerCase()}>
        {type.toLowerCase()}
      </option>
    )
  })

  const jobStatus = ["unassigned", "assigned", "completed", "denied"]
  const mappedJobStatus = jobStatus.map((status, index) => {
    return (
      <option key={index} value={status}>
        {status}
      </option>
    )
  })

  // **********************************************

  // destructured prop incase it was still attatched to original state. Now should be mutable then applied back to original state
  const [updateMwr, setUpdateMwr] = useState({
    ...mwrDetails
  })
  console.table(updateMwr)

  // This will need to locate and update the specific object within the main state
  const handleSubmit = e => {
    e.preventDefault()
    // debugging
    handleUpdate(updateMwr, mwrIndex)
    handleClose()
    // pass this as a function to set state from the child
    // setIsOpen(true)
  }

  //
  // pdf generation
  const handlePdf = e => {
    e.preventDefault()
  }

  //
  return (
    <DetailsFormStyled onSubmit={handleSubmit}>
      <header className={style.formHeaderFlex}>
        <h1 className={style.textCenter}>MWR Submition</h1>
        <button onClick={handleClose} className={style.closeBtn}>
          X
        </button>
      </header>

      <div className={style.employeeInput}>

        {/* ****************** * Employee Part ********************** */}

        <fieldset className={style.fieldsetFlex}>
          <legend className={"legend"}>Employee Inputs (read only):</legend>

          <div className={style.empInputSectOne}>
            <label htmlFor="date">
              <p className={style.inputLabel}>Date:</p>
              <input
                // onChange={e =>
                //   setUpdateMwr({ ...updateMwr, date: e.target.value })
                // }
                readOnly
                value={mwrDetails.date}
                type="date"
                name="date"
                id="date"
                className={style.inputReadableDisabled}
                disabled={true}
              />
            </label>

            <label htmlFor="department">
              <p className={style.inputLabel}>Department:</p>
              <select
                // onChange={e =>
                //   setFormData({ ...formData, department: e.target.value })
                // }
                readOnly
                // value={mwrDetails.department}
                name="department"
                id="department"
                className={style.inputReadableDisabled}
                disabled={true}
              >
                {/* <option value="shipping">Shipping</option>
                <option value="production">Production</option>
                <option value="compounding">Compounding</option> */}
                <option
                  value={mwrDetails.department}
                >{`${mwrDetails.department}`}</option>
              </select>
            </label>

            <label htmlFor="name">
              <p className={style.inputLabel}>Name:</p>
              <input
                // onChange={e => setFormData({ ...formData, name: e.target.value })}
                readOnly
                value={mwrDetails.name}
                type="text"
                name="name"
                id="name"
                className={style.inputReadableDisabled}
                disabled={true}
              />
            </label>
          </div>

          <div className={style.empInputSectTwo}>
            <label className={style.empInputSectTwoBlocks} htmlFor="problem">
              <p className={style.inputLabel}>Problem:</p>
              <textarea
                // onChange={e => setFormData({ ...formData, problem: e.target.value })}
                readOnly
                value={mwrDetails.problem}
                name="problem"
                id="problem"
                className={style.empSecTwoTextAreaInputReadableDisabled}
                disabled={true}
                rows="5"
              // cols="75"
              ></textarea>
            </label>

            <label className={style.empInputSectTwoBlocks} htmlFor="solution">
              <p className={style.inputLabel}>Solution:</p>
              <textarea
                // onChange={e => setFormData({ ...formData, solution: e.target.value })}
                readOnly
                value={mwrDetails.solution}
                name="solution"
                id="solution"
                className={style.empSecTwoTextAreaInputReadableDisabled}
                disabled={true}
                rows="5"
              // cols="75"
              ></textarea>
            </label>
          </div>

          <div className={"flex-row-wrap"}>
            <label htmlFor="request-num" className={style.flex}>
              <p className={style.inputLabel}>Request #:</p>
              <input
                // onChange={e =>
                //   setUpdateMwr({ ...updateMwr, id: e.target.value })
                // }
                value={updateMwr.id}
                type="text"
                name="request-num"
                id="request-num"
                className={`${style.inputReadableDisabled} ${style.growOne}`}
                disabled={true}
              />
            </label>
            <label htmlFor="requested-by-email" className={style.flex}>
              <p className={style.inputLabel}>Requested By Email:</p>
              <input
                // onChange={e =>
                //   setUpdateMwr({
                //     ...updateMwr,
                //     requestedByEmail: e.target.value
                //   })
                // }
                value={updateMwr.requestedByEmail}
                type="email"
                name="requested-by-email"
                id="requested-by-email"
                className={`${style.inputReadableDisabled} ${style.growOne}`}
                disabled={true}
              />
            </label>
          </div>
        </fieldset>

        {/************************ Maintenance Part **************************/}

        <fieldset className={style.fieldsetFlex}>
          <legend className={"legend"}>Maintenance:</legend>

          {/************************* Section 1  **************************** */}
          {/* FLEX */}
          <div className={style.flexContainer}>

            {/* Flex Item */}
            <div>
              {/* Project Number */}
              <label htmlFor="project-num" className={style.flex}>
                <p className={style.inputLabel}>Project Number:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, projectNum: e.target.value })
                  }
                  value={updateMwr.projectNum}
                  type="text"
                  name="project-num"
                  id="project-num"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                // disabled={true}
                />
              </label>
            </div>

            {/* Flex Item */}
            <div>
              {/* Work Order Number */}
              <label htmlFor="work-order-num" className={style.flex}>
                <p className={style.inputLabel}>Work Order Number:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, workOrderNum: e.target.value })
                  }
                  value={updateMwr.workOrderNum}
                  type="text"
                  name="work-order-num"
                  id="work-order-num"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>

              {/* Work Order Date */}
              <label htmlFor="work-order-date" className={style.flex}>
                <p className={style.inputLabel}>Work Order Date:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      workOrderDate: e.target.value
                    })
                  }
                  value={updateMwr.workOrderDate}
                  type="date"
                  name="work-order-date"
                  id="work-order-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                // disabled={true}
                />
              </label>

              {/* Work Order Time */}
              <label htmlFor="work-order-time" className={style.flex}>
                <p className={style.inputLabel}>Work Order Time:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      workOrderTime: e.target.value
                    })
                  }
                  value={updateMwr.workOrderTime}
                  type="time"
                  name="work-order-time"
                  id="work-order-time"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>
            </div>

            {/* FLex Item */}
            <div>
              {/* Scheduled Date */}
              <label htmlFor="scheduled-date" className={style.flex}>
                <p className={style.inputLabel}>Scheduled Date:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      scheduledDate: e.target.value
                    })
                  }
                  value={updateMwr.scheduledDate}
                  type="date"
                  name="scheduled-date"
                  id="scheduled-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}

                // disabled={true}
                />
              </label>

              {/* MWR Type */}
              <label htmlFor="mwr-type" className={style.flex}>
                <p className={style.inputLabel}>MWR Type</p>
                <select
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, type: e.target.value })
                  }
                  value={updateMwr.type}
                  name="mwr-type"
                  id="mwr-type"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                >
                  <option value={updateMwr.type}>{`${updateMwr.type}`}</option>
                  <option value="-" disabled={true}>
                    -
                  </option>
                  {/* TODO pass down mwrType from index.js and you can map through an create the option tags */}

                  {mappedMwrTypes}
                </select>
              </label>

              {/* Problem Type */}
              <label htmlFor="problem-type" className={style.flex}>
                <p className={style.inputLabel}>Problem Type</p>
                <select
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, problemType: e.target.value })
                  }
                  value={updateMwr.problemType}
                  name="problem-type"
                  id="problem-type"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                >
                  <option
                    value={updateMwr.problemType}
                  >{`${updateMwr.problemType}`}</option>
                  <option value="-" disabled={true}>
                    -
                  </option>
                  {/* TODO pass down mwrType from index.js and you can map through an create the option tags */}
                  {mappedProblemTypes}
                </select>
              </label>

              {/* Job Status */}
              <label htmlFor="job-status" className={style.flex}>
                <p className={style.inputLabel}>Job Status</p>
                <select
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, status: e.target.value.toLowerCase() })
                  }
                  value={updateMwr.status}
                  name="job-status"
                  id="job-status"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                >
                  <option
                    value={updateMwr.status}
                  >{`${updateMwr.status}`}</option>
                  <option value="-" disabled={true}>
                    -
                  </option>
                  {mappedJobStatus}
                </select>
              </label>
            </div>
          </div>

          <hr />

          {/************************* Section 2 *******************************/}
          {/* FLEX */}
          <div className={style.flexContainer}>

            {/* Flex Item */}
            <div>
              {/* Department */}
              <label htmlFor="department" className={style.flex}>
                <p className={style.inputLabel}>Department:</p>
                <select
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, department: e.target.value })
                  }
                  value={updateMwr.department}
                  name="department"
                  id="department"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                >
                  <option
                    value={updateMwr.department}
                  >{`${updateMwr.department}`}</option>
                  <option value="" disabled={true}>
                    -
                  </option>
                  <option value="Shipping">Shipping</option>
                  <option value="Production">Production</option>
                  <option value="Compounding">Compounding</option>
                </select>
              </label>

              {/* Site */}
              <label htmlFor="site" className={style.flex}>
                <p className={style.inputLabel}>Site:</p>
                <textarea
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, site: e.target.value })
                  }
                  // readOnly
                  value={updateMwr.site}
                  name="site"
                  id="site"
                  // className={style.empSecTwoTextAreaInputReadableDisabled}
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                  rows="1"
                // cols="50"
                ></textarea>
              </label>
            </div>
          </div>

          <hr />

          {/************************** Section 3 ******************************/}
          {/* FLEX */}
          <div className={style.flexContainer}>

            {/* Flex Item */}
            <div>

              {/* Assigned To */}
              <label htmlFor="assign-to" className={style.flex}>
                <p className={style.inputLabel}>Assiged To:</p>
                <select
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      assignTo: e.target.value
                    })
                  }
                  value={updateMwr.assignTo}
                  name="assign-to"
                  id="assign-to"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                >
                  <option
                    value={updateMwr.assignTo}
                  >{`${updateMwr.assignTo}`}</option>
                  <option value="" disabled={true}>
                    -
                  </option>
                  {mappedAssignedDepartments}
                </select>
              </label>

              {/* Team Member */}
              <label htmlFor="maintenance-team-member" className={style.flex}>
                <p className={style.inputLabel}>Maintenance Team Member:</p>
                <select
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      maintenanceTeamMember: e.target.value
                    })
                  }
                  value={updateMwr.maintenanceTeamMember}
                  name="maintenance-team-member"
                  id="maintenance-team-member"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                >
                  <option
                    value={updateMwr.maintenanceTeamMember}
                  >{`${updateMwr.maintenanceTeamMember}`}</option>
                  <option value="" disabled={true}>
                    -
                  </option>
                  {mappedAllMaintenanceEmployees}
                </select>
              </label>

              {/* Assistant */}
              <label htmlFor="assistant" className={style.flex}>
                <p className={style.inputLabel}>Assistant:</p>
                <select
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      assistant: e.target.value
                    })
                  }
                  value={updateMwr.assistant}
                  name="assistant"
                  id="assistant"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                >
                  <option
                    value={updateMwr.assistant}
                  >{`${updateMwr.assistant}`}</option>
                  <option value="" disabled={true}>
                    -
                  </option>
                  {mappedAllMaintenanceEmployees}
                </select>
              </label>
            </div>
          </div>

          <hr />

          {/************************** Section 4 ******************************/}
          {/* FLEX */}
          <div className={style.flexContainer}>

            {/* Flex Item */}
            <div>
              {/* Due Date */}
              <label htmlFor="due-date" className={style.flex}>
                <p className={style.inputLabel}>Due Date:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, dueDate: e.target.value })
                  }
                  value={updateMwr.dueDate}
                  type="date"
                  name="due-date"
                  id="due-date"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>

              {/* Est. Hours */}
              <label htmlFor="est-hours" className={style.flex}>
                <p className={style.inputLabel}>Est. Hours:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, estHours: e.target.value })
                  }
                  value={updateMwr.estHours}
                  type="text"
                  name="est-hours"
                  id="est-hours"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>

              {/* Act. Hours */}
              <label htmlFor="act-hours" className={style.flex}>
                <p className={style.inputLabel}>Actual Hours:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, actHours: e.target.value })
                  }
                  value={updateMwr.actHours}
                  type="text"
                  name="act-hours"
                  id="act-hours"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>

              {/* Downtime */}
              <label htmlFor="downtime" className={style.flex}>
                <p className={style.inputLabel}>Downtime:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, downtime: e.target.value })
                  }
                  value={updateMwr.downtime}
                  type="text"
                  name="downtime"
                  id="downtime"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>
            </div>

            {/* Flex Item */}
            <div>
              {/* Asset ID */}
              <label htmlFor="asset-id" className={style.flex}>
                <p className={style.inputLabel}>Asset Id:</p>
                <input
                  onChange={e =>
                    setUpdateMwr({ ...updateMwr, assetId: e.target.value })
                  }
                  value={updateMwr.assetId}
                  type="text"
                  name="asset-id"
                  id="asset-id"
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                // disabled={true}
                />
              </label>

              {/* Asset Description */}
              <label htmlFor="asset-description" className={style.flex}>
                <p className={style.inputLabel}>Asset Description:</p>
                <textarea
                  onChange={e =>
                    setUpdateMwr({
                      ...updateMwr,
                      assetDescription: e.target.value
                    })
                  }
                  // readOnly
                  value={updateMwr.assetDescription}
                  name="asset-description"
                  id="asset-description"
                  // className={style.empSecTwoTextAreaInputReadableDisabled}
                  // lesson learned: multiple classes
                  className={`${style.inputReadableDisabled} ${style.growOne}`}
                  rows="1"
                // cols="50"
                ></textarea>
              </label>
            </div>
          </div>

          <hr />

          {/**************************** Section 5 ****************************/}
          {/* FLEX */}
          <div className={style.empInputSectTwo}>

            {/* Brief Description */}
            <label
              className={style.empInputSectTwoBlocks}
              htmlFor="brief-discription"
            >
              <p className={style.inputLabel}>Brief Discription:</p>
              <textarea
                onChange={e =>
                  setUpdateMwr({
                    ...updateMwr,
                    briefDiscription: e.target.value
                  })
                }
                // readOnly
                value={updateMwr.briefDiscription}
                name="brief-discription"
                id="brief-discription"
                className={style.empSecTwoTextAreaInputReadableDisabled}
                rows="5"
              // cols="75"
              ></textarea>
            </label>

            {/* Work Description */}
            <label
              className={style.empInputSectTwoBlocks}
              htmlFor="work-discription"
            >
              <p className={style.inputLabel}>Work Discription:</p>
              <textarea
                onChange={e =>
                  setUpdateMwr({
                    ...updateMwr,
                    workDiscription: e.target.value
                  })
                }
                // readOnly
                value={updateMwr.workDiscription}
                name="work-discription"
                id="work-discription"
                className={style.empSecTwoTextAreaInputReadableDisabled}
                rows="5"
              // cols="75"
              ></textarea>
            </label>
          </div>
        </fieldset>
      </div>

      <input type="submit" value="Submit" className={style.formBtn} />
      <button type="button"> create pdf </button>

      {/* ******************************************* */}
      {/* {
        <PDFDownloadLink
          document={<PdfDocument data={updateMwr} />}
          fileName="mwr.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      } */}
    </DetailsFormStyled>
  )
}

export default ViewDetails
