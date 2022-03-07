import React from "react"

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className="center nav-bar">
      <div className="dropdown">
        <button className="dropbtn">Do Play</button>
        <div className="dropdown-content">
          <a href="#">How Much does/doesn’t your Degree pay?</a>
          <a href="#"> What should I do?</a>
          <a href="#">What degree should I get?</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <a href="environment.html">Environment</a>
        </button>
        <div className="dropdown-content">
          <a href="#" className="unlinked">
            How Polluted is the environment?
          </a>
          <a href="#">How much carbon and methane are in the air?</a>
          <a href="#">Will my house be underwater?</a>
          <a href="#">Is plastic really a problem?</a>
          <a href="#">How much will the world burn?</a>
          <a href="#">How many more hurricanes will there be?</a>
          <a href="#">Should I recycle?</a>
          <a href="https://dash.gallery/dash-food-footprint/">
            what should I eat?
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Journal Industrial Complex</button>
        <div className="dropdown-content">
          <a href="#">How many Journals are behind paywalls?</a>
          <a href="#">How many public journals are privatized?</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Science</button>
        <div className="dropdown-content">
          <a href="#">Which countries produce the best science?</a>
          <a href="#">Which country has the most patents?</a>
          <a href="#">Which countries' journals have the most citations?</a>
          <a href="#">
            Which countries' journal articles have been reproduced the most?
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Law</button>
        <div className="dropdown-content">
          <a href="#">Which country has the most international Law breaches?</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">NEWS</button>
        <div className="dropdown-content">
          <a href="#">Which news organizations tell the most lies?</a>
          <a href="#">Which NEWS is most trustworthy?</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Money</button>
        <div className="dropdown-content">
          <a href="#">Who Owns all the Crypto?</a>
          <a href="#">What are crypto currencies used for?</a>
          <a href="https://dash.gallery/dash-medical-provider-charges/">
            Which states have the most expensive healthcare?
          </a>
          <a href="https://dash.gallery/dash-global-living-standards/">
            Where is the cheapest place to live?
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Death</button>
        <div className="dropdown-content">
          <a href="#">How am I going to die?</a>
          <a href="#">What is the most likely violent way to die?</a>
          <a href="https://dash.gallery/dash-opioid-epidemic/">
            Who is dying from Opiods?
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sportball</button>
        <div className="dropdown-content">
          <a href="https://dash.gallery/dash-fifa-dashboard/">
            Who is the best soccer player of all time?
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
