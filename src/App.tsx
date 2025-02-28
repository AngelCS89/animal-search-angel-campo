import React from "react"
import Layout from "./layout/Layout"
import AppRoutes from "./Routes"
import "./styles/global.scss"


const App: React.FC = () => {
  return (
      <Layout>
        <AppRoutes />
      </Layout>
  )
}

export default App