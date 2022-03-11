import React from "react"
import Header from "../components/Header"
import "../styles/style.css"

function Home() {
  return (
    <div className="h-screen font-serif">
      <Header />
      <div className="grid place-items-center">
      <iframe width="80%" height="514" frameBorder="0" src="https://observablehq.com/embed/db919c1224f6b32c?cells=p2"></iframe>
      </div>
    </div>
  )
}

export default Home
