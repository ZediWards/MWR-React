import * as React from "react"


// Maintenance department options
const assignedDepartments = [
  "Production Maintenance",
  "Building Maintneance"
]
export const mappedAssignedDepartments = assignedDepartments.map(
  (department, index) => {
    console.log(mappedAssignedDepartments)
    return (
      <option key={index} value={department}>
        {department}
      </option>
    )
  }
)

// production maintenance
const productionMaintenanceEmployees = ["Jon", "Bob", "Jim"]
export const mappedProductionMaintenanceEmployees = productionMaintenanceEmployees.map(
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
export const mappedBuildingMaintenanceEmployees = buildingMaintenanceEmployees.map(
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
export const mappedAllMaintenanceEmployees = allMaintenanceEmployees.map(
  (employee, index) => {
    return (
      <option key={index} value={employee}>
        {employee}
      </option>
    )
  }
)

// problem type
const problemType = ["electrical", "structural", "plumbing", "outside contractor"]
export const mappedProblemTypes = problemType.map((problemType, index) => {
  return (
    <option key={index} value={problemType}>
      {problemType}
    </option>
  )
})

// job status
const jobStatus = ["unassigned", "assigned", "completed", "denied"]
export const mappedJobStatus = jobStatus.map((status, index) => {
  return (
    <option key={index} value={status}>
      {status}
    </option>
  )
})
