import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

import SettingsComponent from "../components/settings"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <PrivateRoute path="/app/SettingsComponent" component={SettingsComponent} />
    </Router>
  </Layout>
)

export default App