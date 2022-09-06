import * as React from "react"
import { useState, useEffect, useContext } from "react";

import { Link } from "gatsby"

import {
  GlobalSettingsContext,
  GlobalSettingsDispatchContext
} from "../context/GlobalContextProvider";

import Layout from "../components/layout"

const SettingsPage = () => {
  // context variables
  const settings = useContext(GlobalSettingsContext)
  console.log("FROM SETTINGS PAGE");
  console.table(settings);

  return (
    <Layout>
      <div>
        <p>this is the SETTINGS page</p>
      </div>

      <Link to="/admin">Go back to ADMIN</Link>
    </Layout>
  )
}

export default SettingsPage