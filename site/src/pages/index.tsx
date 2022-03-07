import React from "react"
import Navbar from "../components/Navbar"
import "../styles/style.css"
import { Helmet } from "react-helmet"

function Home() {
  return (
    <div className="h-screen">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Navbar />
    </div>
  )
}

export default Home
