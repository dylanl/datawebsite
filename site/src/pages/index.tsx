import React from "react"
import Header from "../components/Header"
import "../styles/style.css"

function Home() {
  return (
    <div className="h-screen font-serif">
      <Header />
      <main>
        <div className="flex justify-center lg:text-2xl md:text-xl text-lg">
          What data is most recent?
        </div>
      </main>
    </div>
  )
}

export default Home
