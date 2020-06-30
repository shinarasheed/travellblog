import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Featured from "../components/featured/Featured"
import Categories from "../components/home/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Featured />
    <Categories />
  </Layout>
)

export default IndexPage
