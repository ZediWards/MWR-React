import * as React from "react";
import { useState, useContext } from "react";
import Gallery from "../components/LightGallery";

// import LightGallery from 'lightgallery/react';
// // import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

import { ACTIONS } from "../context/GlobalContextProvider";

import {
  GlobalDispatchContext,
  GlobalStateContext,
  GlobalSettingsContext,
  GlobalSettingsDispatchContext,
} from "../context/GlobalContextProvider";

import styled from "styled-components";

// ********** use for PDF ****************
import { PDFDownloadLink } from "@react-pdf/renderer";
// import MyDocument from "./pdfTEST"
import { PdfDocument } from "./pdfTemplate";

import * as style from "../css_modules/viewDetailsStyles.module.css";

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
`;

const ViewDetails = ({ mwrDetails, handleClose }) => {
  // context variables
  const settings = useContext(GlobalSettingsContext);
  const settingsDispatch = useContext(GlobalSettingsDispatchContext);
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  // console.log(`vv this is mwrDetails state in viewDetails.js vv`)
  // console.table(mwrDetails)
  // console.table(mwrDetails.id)

  // **************** varibles for mapping inside form********************
  // const assignedDepartments = [
  //   "Production Maintenance",
  //   "Building Maintneance"
  // ];
  const mappedAssignedDepartments = settings.maintenenceDepartments.map(
    (department, index) => {
      return (
        <option key={index} value={department}>
          {department}
        </option>
      );
    }
  );

  // production maintenance
  // const productionMaintenanceEmployees = ["Jon", "Bob", "Jim"];
  const mappedProductionMaintenanceEmployees =
    settings.generalMaintenenceEmployees.map((employee, index) => {
      return (
        <option key={index} value={employee}>
          {employee}
        </option>
      );
    });

  // building maintenance
  // const buildingMaintenanceEmployees = ["Matt", "Sara"];
  const mappedBuildingMaintenanceEmployees =
    settings.buildingMainteneceEmployees.map((employee, index) => {
      return (
        <option key={index} value={employee}>
          {employee}
        </option>
      );
    });

  // all maintenance
  const allMaintenanceEmployees = [
    ...settings.buildingMainteneceEmployees,
    ...settings.generalMaintenenceEmployees,
  ];
  const mappedAllMaintenanceEmployees = allMaintenanceEmployees.map(
    (employee, index) => {
      return (
        <option key={index} value={employee}>
          {employee}
        </option>
      );
    }
  );

  // function that creats option map that can pass arr into
  // job status change if department is not undefined
  // open/history?

  // const problemType = [
  //   "electrical",
  //   "structural",
  //   "plumbing",
  //   "outside contractor"
  // ];
  const mappedProblemTypes = settings.problemType.map((problemType, index) => {
    return (
      <option key={index} value={problemType}>
        {problemType}
      </option>
    );
  });

  // mwrTypes from props CONVERTED TO USING MWR TYPES FROM CONTEXT SETTINGS
  const mappedMwrTypes = settings.mwrTypes.map((item, index) => {
    return (
      <option key={index} value={item.type.toLowerCase()}>
        {item.type.toLowerCase()}
      </option>
    );
  });

  // const jobStatus = ["unassigned", "assigned", "completed", "denied"];
  const mappedJobStatus = settings.status.map((status, index) => {
    return (
      <option key={index} value={status}>
        {status}
      </option>
    );
  });

  const mappedDepartments = settings.departments.map((department, index) => {
    return (
      <option key={index} value={department}>
        {department}
      </option>
    );
  });

  // ******************* end of mapping varibles ***************************

  // destructured prop incase it was still attatched to original state. Now should be mutable then applied back to original state
  // *** mwrDetails prop is passed down from mainTable referencing local storage Context
  const [updateMwr, setUpdateMwr] = useState({
    ...mwrDetails,
  });
  // console.log(`vv this is updateMwr state in viewDetails.js vv`)
  console.log("MWR DETAILS!!!!!");
  console.table(updateMwr.id);

  // This will need to locate and update the specific object within the main state
  const handleSubmit = (e) => {
    e.preventDefault();
    // debugging
    console.log("submit is firing with CONTEXT");
    dispatch({ type: ACTIONS.UPDATE_MWR, payload: updateMwr });

    // handleUpdate(updateMwr, mwrIndex);
    handleClose();
    // pass this as a function to set state from the child
    // setIsOpen(true)
  };

  //

  // pdf generation
  const handlePdf = (e) => {
    e.stopPropagation();
    console.log("handle pdf is firing");
    dispatch({ type: ACTIONS.UPDATE_MWR, payload: updateMwr });
    // handleUpdate(updateMwr, mwrIndex);
    handleClose();
  };

  // ******************************* JSX ************************************
  return (
    <DetailsFormStyled value="form" onSubmit={handleSubmit}>
      <header className={style.formHeaderFlex}>
        <h1 className={style.textCenter}>MWR Submition</h1>
        <button onClick={handleClose} className={style.closeBtn}>
          X
        </button>
      </header>

      {/* FLEX COLUMN */}
      <div className={style.employeeInput}>
        {/* ************************* Employee Part ***************************/}

        {/* FLEX COLUMN */}
        <fieldset className={style.fieldsetFlex}>
          <legend className={"legend"}>Employee Inputs (read only):</legend>

          {/* FLEX WRAP */}
          <div className={style.empInputSectOne}>
            {/* Date */}
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

            {/* Department */}
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
                className={`${style.inputReadableDisabled} ${style.selectStyles}`}
                disabled={true}
              >
                <option
                  value={mwrDetails.department}
                >{`${mwrDetails.department}`}</option>
              </select>
            </label>

            {/* Name */}
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

          {/* FLEX WRAP */}
          <div className={style.empInputSectTwo}>
            {/* Problem */}
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

            {/* Solution */}
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

          {/* FLEX WRAP */}
          <div className={"flex-row-wrap"}>
            {/* Request Number */}
            <label htmlFor="request-num">
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

            {/* Email */}
            <label htmlFor="requested-by-email">
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
              <label htmlFor="project-num">
                <p className={style.inputLabel}>Project Number:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="work-order-num">
                <p className={style.inputLabel}>Work Order Number:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="work-order-date">
                <p className={style.inputLabel}>Work Order Date:</p>
                <input
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      workOrderDate: e.target.value,
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
              <label htmlFor="work-order-time">
                <p className={style.inputLabel}>Work Order Time:</p>
                <input
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      workOrderTime: e.target.value,
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
              <label htmlFor="scheduled-date">
                <p className={style.inputLabel}>Scheduled Date:</p>
                <input
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      scheduledDate: e.target.value,
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
              <label htmlFor="mwr-type">
                <p className={style.inputLabel}>MWR Type</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({ ...updateMwr, type: e.target.value })
                  }
                  value={updateMwr.type}
                  name="mwr-type"
                  id="mwr-type"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
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
              <label htmlFor="problem-type">
                <p className={style.inputLabel}>Problem Type</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({ ...updateMwr, problemType: e.target.value })
                  }
                  value={updateMwr.problemType}
                  name="problem-type"
                  id="problem-type"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
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
              <label htmlFor="job-status">
                <p className={style.inputLabel}>Job Status</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      status: e.target.value.toLowerCase(),
                    })
                  }
                  value={updateMwr.status}
                  name="job-status"
                  id="job-status"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
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
              <label htmlFor="department">
                <p className={style.inputLabel}>Department:</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({ ...updateMwr, department: e.target.value })
                  }
                  value={updateMwr.department}
                  name="department"
                  id="department"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
                >
                  <option
                    value={updateMwr.department}
                  >{`${updateMwr.department}`}</option>
                  <option value="" disabled={true}>
                    -
                  </option>
                  {mappedDepartments}
                  {/* <option value="shipping">shipping</option>
                  <option value="production line 1">production line 1</option>
                  <option value="production line 2">production line 2</option>
                  <option value="compounding">compounding</option> */}
                </select>
              </label>

              {/* Site */}
              <label htmlFor="site">
                <p className={style.inputLabel}>Site:</p>
                <textarea
                  onChange={(e) =>
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

          {/**************************** Section 3 ****************************/}
          {/* FLEX */}
          <div className={style.empInputSectTwo}>
            {/* Brief Description */}
            <label
              className={style.empInputSectTwoBlocks}
              htmlFor="brief-discription"
            >
              <p className={style.inputLabel}>Brief Discription:</p>
              <textarea
                onChange={(e) =>
                  setUpdateMwr({
                    ...updateMwr,
                    briefDiscription: e.target.value,
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
                onChange={(e) =>
                  setUpdateMwr({
                    ...updateMwr,
                    workDiscription: e.target.value,
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

          <hr />

          {/************************** Section 4 ******************************/}
          {/* FLEX */}
          <div className={style.flexContainer}>
            {/* Flex Item */}
            <div>
              {/* Assigned To */}
              <label htmlFor="assign-to">
                <p className={style.inputLabel}>Assiged To:</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      assignTo: e.target.value,
                    })
                  }
                  value={updateMwr.assignTo}
                  name="assign-to"
                  id="assign-to"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
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
              <label htmlFor="maintenance-team-member">
                <p className={style.inputLabel}>Maintenance Team Member:</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      maintenanceTeamMember: e.target.value,
                    })
                  }
                  value={updateMwr.maintenanceTeamMember}
                  name="maintenance-team-member"
                  id="maintenance-team-member"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
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
              <label htmlFor="assistant">
                <p className={style.inputLabel}>Assistant:</p>
                <select
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      assistant: e.target.value,
                    })
                  }
                  value={updateMwr.assistant}
                  name="assistant"
                  id="assistant"
                  className={`${style.inputReadableDisabled} ${style.growOne} ${style.selectStyles}`}
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

          {/************************** Section 5 ******************************/}
          {/* FLEX */}
          <div className={style.flexContainer}>
            {/* Flex Item */}
            <div>
              {/* Due Date */}
              <label htmlFor="due-date">
                <p className={style.inputLabel}>Due Date:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="est-hours">
                <p className={style.inputLabel}>Est. Hours:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="act-hours">
                <p className={style.inputLabel}>Actual Hours:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="downtime">
                <p className={style.inputLabel}>Downtime:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="asset-id">
                <p className={style.inputLabel}>Asset Id:</p>
                <input
                  onChange={(e) =>
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
              <label htmlFor="asset-description">
                <p className={style.inputLabel}>Asset Description:</p>
                <textarea
                  onChange={(e) =>
                    setUpdateMwr({
                      ...updateMwr,
                      assetDescription: e.target.value,
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
        </fieldset>
      </div>
      {true ? <Gallery></Gallery> : null}

      {/* save btn */}
      <input type="submit" value="Save" className={style.formBtn} />

      {/* save & generate pdf btn */}

      <button
        className={style.pdfFormBtn}
        type="button"
        onClickCapture={handlePdf}
      >
        <PDFDownloadLink
          className={style.pdfDownloadBtn}
          document={<PdfDocument data={updateMwr} companyName={settings.companyName} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Save and Create PDF"
          }
        </PDFDownloadLink>
      </button>
    </DetailsFormStyled>
  );
};

export default ViewDetails;
