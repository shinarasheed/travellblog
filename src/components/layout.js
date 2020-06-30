import React from "react"
import PropTypes from "prop-types"
import Nav from "../components/nav/index"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
