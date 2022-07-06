import * as React from "react"
import { useState } from "react"


import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer"


// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    fontFamily: "Courier",
    // flexDirection: "row",
    backgroundColor: "#E4E4E4",
    paddingTop: 10
  },
  headerSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    padding: 10,
    marginTop: 0,
    // flexGrow: 1,
    borderBottom: '1px solid hsl(0, 0%, 18%)',
  },
  section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    // paddingTop: 0,
    // flexGrow: 1,
    // border: '1px solid red',
  },
  insetSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  signatureBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 10,
    // paddingTop: 0,
    // flexGrow: 1,
    // border: '1px solid red',
  },
  flexRowWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexItemTextBox: {
    display: "flex",
    flexDirection: "column",
    // border: '1px solid purple',
    marginHorizontal: 10
    // width: "50%"
  },
  header: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
  },
  label: {
    // color: "green",
    fontFamily: "Helvetica-Bold",
    color: "hsl(0, 0%, 18%)"
  },
  output: {
    // color: "red",
    marginTop: 4,
    fontFamily: "Helvetica",
    color: "hsl(0, 0%, 18%)"

  },
  marginTop: {
    marginTop: 10
  },
  marginTopTen: {
    marginTop: 10
  },
  marginTopTwenty: {
    marginTop: 20
  },
  marginTopZero: {
    marginTop: 0
  },
  width100: {
    width: "100%"
  },
  width50: {
    width: "45%"
  },
  horizontalLine: {
    marginHorizontal: 10,
    marginTop: -7,
    borderBottom: "0.5px solid hsl(0, 0%, 18%)"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  boxBorder: {
    border: "0.5px solid hsl(0, 0%, 18%)",
    marginHorizontal: 10
  },
  alignBottom: {
    alignSelf: "flex-end"
  }

})



// Create Document Component
export function PdfDocument({ data }) {

  // State
  const [companyHeader, setCompanyHeader] = useState("Company Name")

  console.log(`vv this is updateMwr state passed to PDF template vv`)
  // console.table(data)

  return (
    <Document>
      {/* CONTAINER */}
      <Page size="A4" style={styles.page}>

        {/* FLEX ROW */}
        <View style={[styles.headerSection, styles.spaceBetween]}>
          {/* FLEX ITEM */}
          <Text style={styles.header}>{companyHeader}</Text>
          <Text style={[styles.label, styles.alignBottom]}>Work Order Number: {data.workOrderNum}</Text>
        </View>

        {/*  ************* LINE BREAK ************************** */}
        <View style={styles.horizontalLine}></View>
        {/* **************************************************** */}

        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* FLEX ITEM */}
          <View style={styles.flexItemTextBox}>
            {/* project num   */}
            <Text style={styles.label}>Project Number:</Text>
            <Text style={styles.output}>{data.projectNum}</Text>
          </View>
          {/* work order number*/}
          {/* <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Work Order Number:</Text>
            <Text style={styles.output}>{data.workOrderNum}</Text>
          </View> */}
          {/* work order date*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>WO Issued Date:</Text>
            <Text style={styles.output}>{data.workOrderDate}</Text>
          </View>
          {/* scheduled date*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Scheduled Date:</Text>
            <Text style={styles.output}>{data.scheduledDate}</Text>
          </View>
        </View>

        {/* FLEX ROW */}
        {/* <View style={styles.section}> */}
        {/* work order time*/}
        {/* <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Work Order Time:</Text>
            <Text style={styles.output}>{data.workOrderTime}</Text>
          </View>
        </View> */}

        {/* FLEX ROW */}
        <View style={[styles.section, styles.marginTopZero]}>
          {/* FLEX ITEM */}
          {/* mwr type */}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>MWR Type:</Text>
            <Text style={styles.output}>{data.type}</Text>
          </View>
          {/* problem type */}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Problem Type:</Text>
            <Text style={styles.output}>{data.problemType}</Text>
          </View>
          {/* department*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Department:</Text>
            <Text style={styles.output}>{data.department}</Text>
          </View>
          {/* site*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Site:</Text>
            <Text style={styles.output}>{data.site}</Text>
          </View>
          {/* job status*/}
          {/* <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Job Status:</Text>
            <Text style={styles.output}>{data.status}</Text>
          </View> */}
        </View>

        <View style={[styles.boxBorder]}>
          <View style={styles.insetSection}>
            {/* name*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.output}>{data.name}</Text>
            </View>
            {/* Requested by Email */}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Requested by Email:</Text>
              <Text style={styles.output}>{data.requestedByEmail}</Text>
            </View>
          </View>

          <View style={styles.insetSection}>
            {/* Problem */}
            <View style={[styles.flexItemTextBox, styles.width100]}>
              <Text style={styles.label}>Problem:</Text>
              <Text style={styles.output}>{data.problem}</Text>
            </View>
            {/* Solution*/}
            <View style={[styles.flexItemTextBox, styles.width100, styles.marginTopTen]}>
              <Text style={styles.label}>Solution:</Text>
              <Text style={styles.output}>{data.solution}</Text>
            </View>
          </View>
        </View>


        {/*  ************* LINE BREAK ************************** */}
        {/* <View style={styles.horizontalLine}></View> */}
        {/* **************************************************** */}

        {/* FLEX ROW */}
        <View style={styles.section}>
          <View style={[styles.flexRowWrap, styles.width100]}>
            {/* FLEX ITEM */}
            {/* due date*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Due Date:</Text>
              <Text style={styles.output}>{data.dueDate}</Text>
            </View>
            {/* est hours*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Est. Hours:</Text>
              <Text style={styles.output}>{data.estHours}</Text>
            </View>
            {/* actual hours*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Actual Hours:</Text>
              <Text style={styles.output}>{data.actHours}</Text>
            </View>
            {/* downtime*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Downtime:</Text>
              <Text style={styles.output}>{data.downtime}</Text>
            </View>
          </View>

          {/*  ************* LINE BREAK ************************** */}
          <View style={styles.horizontalLine}></View>
          {/* **************************************************** */}

          {/* FLEX ROW */}
          <View style={[styles.flexRowWrap, styles.width100, styles.marginTopTwenty]}>
            {/* FLEX ITEM */}
            {/* assigned to */}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Assigned To:</Text>
              <Text style={styles.output}>{data.assignTo}</Text>
            </View>
            {/* maintenance team member*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Maintenance Team Member:</Text>
              <Text style={styles.output}>{data.maintenanceTeamMember}</Text>
            </View>
            {/* assistant*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Assistant:</Text>
              <Text style={styles.output}>{data.assistant}</Text>
            </View>
          </View>
        </View>




        {/*  ************* LINE BREAK ************************** */}
        {/* <View style={styles.horizontalLine}></View> */}
        {/* **************************************************** */}

        <View style={styles.boxBorder}>
          {/* FLEX ROW */}
          <View style={styles.insetSection}>
            {/* FLEX ITEM */}
            {/* asset id*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Asset ID:</Text>
              <Text style={styles.output}>{data.assetId}</Text>
            </View>
            {/* asset descriptions*/}
            <View style={styles.flexItemTextBox}>
              <Text style={styles.label}>Asset Description:</Text>
              <Text style={styles.output}>{data.assetDescription}</Text>
            </View>
          </View>

          <View style={styles.insetSection}>
            {/* FLEX ITEM */}
            {/* brief description */}
            <View style={[styles.flexItemTextBox, styles.width100]}>
              <Text style={styles.label}>Brief Description:</Text>
              <Text style={styles.output}>{data.briefDiscription}</Text>
            </View>
            {/* work description*/}
            <View style={[styles.width100, styles.flexItemTextBox, styles.marginTopTen]}>
              <Text style={styles.label}>Work Description:</Text>
              <Text style={styles.output}>{data.workDiscription}</Text>
            </View>
          </View>


        </View>


        {/*  ************* LINE BREAK ************************** */}
        {/* <View style={styles.horizontalLine}></View> */}
        {/* **************************************************** */}



        <View style={styles.signatureBox}>
          {/* FLEX ITEM */}
          {/* maintenance signature */}
          <View style={[styles.flexItemTextBox, styles.width50]}>
            <Text style={styles.label}>Maintenance Signature:</Text>
            <Text style={[styles.output, styles.marginTopTen]}>______________________________</Text>
          </View>
          {/* sign off date*/}
          <View style={[styles.flexItemTextBox, styles.width50]}>
            <Text style={styles.label}>Date:</Text>
            <Text style={[styles.output, styles.marginTopTen]}>______________________________</Text>
          </View>
        </View>



        {/* FLEX ROW */}
        {/* <View style={styles.section}> */}
        {/* FLEX ITEM */}
        {/* MWR submition date*/}
        {/* <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>MWR Submition Date:</Text>
            <Text style={styles.output}>{data.date}</Text>
          </View> */}
        {/* department*/}
        {/* <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Department:</Text>
            <Text style={styles.output}>{data.department}</Text>
          </View> */}
        {/* request ID*/}
        {/* <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Request ID:</Text>
            <Text style={styles.output}>{data.id}</Text>
          </View>
        </View> */}

      </Page>
    </Document>
  )
}

