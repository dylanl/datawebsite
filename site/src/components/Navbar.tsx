import { Link } from "gatsby"
import React from "react"

type Props = {}

function handleMouseEnter() {
  const dropdown = document.getElementById("do-play-dropdown")
  dropdown.classList.remove("hidden")
  dropdown.classList.add("flex")
}

function Navbar({}: Props) {
  return (
    <nav className="flex items-center justify-around inset-x-0 top-0 h-16 fixed bg-slate-500">
      <ul className="flex">
        <li className="dropdown">
          <Link to="/" className="p-16">
            Do Play
          </Link>
          <ul className="dropdown-menu flex-col absolute top-16 bg-slate-500 rounded-b hidden p-2">
            <li className="mt-1">
              <Link to="/">How Much does/doesn’t your Degree pay?</Link>
            </li>
            <li className="mt-1">
              <Link to="/">What should I do?</Link>
            </li>
            <li className="mt-1">
              <Link to="/">What degree should I get?</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
