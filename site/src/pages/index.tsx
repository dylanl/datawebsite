import React from "react"
import Barchart from "../components/Barchart"
import Header from "../components/Header"
import "../styles/style.css"

function Home() {
  const chartdata = [
    410, 370, 330, 270, 240, 220, 200, 180, 165, 150, 135, 130, 135, 150, 165,
    180, 200, 220, 240, 270, 300, 330, 370, 410,
  ]
  return (
    <div className="h-screen font-serif bg-slate-100 dark:bg-slate-400">
      <Header />
      <div className="grid place-items-center">
        <iframe
          width="80%"
          height="514"
          frameBorder="0"
          src="https://observablehq.com/embed/db919c1224f6b32c?cells=p2"
        ></iframe>
      </div>

      <Barchart data={chartdata} />
    </div>
  )
}

export default Home
