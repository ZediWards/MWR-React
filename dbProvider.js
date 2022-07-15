import React, { useState } from "react"

// context
export const dbContext = React.createContext()

// Provider: accepts a value prop that is passed to consuming components and decendants
// Providers can be nested to override values deeper within the tree.
// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
const DbProvider = props => {
  const [db, setDb] = useState([
    {
      id: 1,
      // Employee section
      type: "CONTEXT DB",
      date: "2021-11-12",
      name: "Jon Doe",
      department: "Context Test"
    }
  ])

  // test by removing all passed props of db and handle click
  return (
    <dbContext.Provider
      value={{
        db,
        setDb,
        handleClick: formData => setDb([...db, formData]),
        console: () => console.log("CONTEXT", db),
        print: "CONTEXT"
      }}
    >
      {props.children}
    </dbContext.Provider>
  )
}

// wrapRootElement hook takes most of our site and passes it as props into a function
// we give it, like the one we just exported from Provider.js,
// giving us the perfect little space to wrap everything inside.
// see gatsby-browser.js & gatsby-ssr.js

export default ({ element }) => <DbProvider>{element}</DbProvider>
