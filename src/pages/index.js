import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Featured from "../components/featured/Featured"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Featured />
  </Layout>
)

export default IndexPage
