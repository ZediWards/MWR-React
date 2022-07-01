import * as React from "react"

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"


// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: '1px solid red',
  },
  flexItemTextBox: {
    display: "flex",
    flexDirection: "column",
    border: '1px solid purple',
    marginHorizontal: 10
    // width: "50%"
  },
  label: {
    color: "green",
  },
  output: {
    color: "red",
  }
})

// Create Document Component
export function PdfDocument({ data }) {
  console.table(data)
  return (
    <Document>
      {/* CONTAINER */}
      <Page size="A4" style={styles.page}>

        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* FLEX ITEM */}
          <View style={styles.flexItemTextBox}>
            {/* project num   */}
            <Text style={styles.label}>Project Number:</Text>
            <Text style={styles.output}>{data.projectNum}</Text>
          </View>
        </View>

        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* FLEX ITEM */}
          {/* work order number*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Work Order Number:</Text>
            <Text style={styles.output}>{data.workOrderNum}</Text>
          </View>
          {/* work order date*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Work Order Date:</Text>
            <Text style={styles.output}>{data.workOrderDate}</Text>
          </View>
          {/* work order time*/}
          <View style={styles.flexItemTextBox}>
            <Text style={styles.label}>Work Order Time:</Text>
            <Text style={styles.output}>{data.workOrderTime}</Text>
          </View>
        </View>
        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* sheduled date*/}
          <Text>{data.scheduledDate}</Text>
          {/* mwr type */}
          <Text>{data.type}</Text>
          {/* problem type */}
          <Text>{data.problemType}</Text>
          {/* job status*/}
          <Text>{data.status}</Text>
        </View>

        {/*  ************* LINE BREAK ************************** */}
        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* department*/}
          <Text>{data.department}</Text>
          {/* site*/}
          <Text>{data.site}</Text>
          {/* */}
        </View>
        {/*  ************* LINE BREAK ************************** */}
        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* brief description */}
          <Text>{data.briefDiscription}</Text>
          {/* work description*/}
          <Text>{data.workDiscription}</Text>
        </View>
        {/*  ************* LINE BREAK ************************** */}
        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* assigned to */}
          <Text>{data.assignTo}</Text>
          {/* maintenance team member*/}
          <Text>{data.maintenanceTeamMember}</Text>
          {/* assistant*/}
        </View>
        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* due date*/}
          <Text>{data.dueDate}</Text>
          {/* est hours*/}
          <Text>{data.estHours}</Text>
          {/* actual hours*/}
          <Text>{data.actHours}</Text>
          {/* downtime*/}
          <Text>{data.downtime}</Text>
        </View>
        {/*  ************* LINE BREAK ************************** */}
        {/* FLEX ROW */}
        <View style={styles.section}>
          {/* asset id*/}
          <Text>{data.assetId}</Text>
          {/* asset descriptions*/}
          <Text>{data.assetDescription}</Text>
        </View>
      </Page>
    </Document>
  )
}

