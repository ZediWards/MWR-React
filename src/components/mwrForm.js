import * as React from "react"
import { useState } from "react"

const MwrForm = ({ data, handleClick, mwrType }) => {
  // console.table(data)
  const [formData, setFormData] = useState({
    type: "",
    department: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    handleClick(formData)
    setFormData({
      type: "",
      department: ""
    })
    // pass this as a function to set state from the child
    // setIsOpen(true)
  }

  //

  //
  return (
    <form onSubmit={handleSubmit}>
      <h1>Our Form</h1>

      <label htmlFor="title">
        <p>Form for {mwrType}</p>
        <input
          onChange={e => setFormData({ ...formData, type: e.target.value })}
          value={formData.type}
          type="text"
          name="title"
          id="title"
        />
      </label>

      <label htmlFor="body">
        <p>Body</p>
        <textarea
          onChange={e =>
            setFormData({ ...formData, department: e.target.value })
          }
          value={formData.department}
          name="body"
          id="body"
        ></textarea>
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default MwrForm
