import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"

function Header() {
  return (
    <header className="pt-16">
      <Helmet>
        <title>Home</title>
        <body className="light" />
      </Helmet>
      <Navbar />
    </header>
  )
}

export default Header
