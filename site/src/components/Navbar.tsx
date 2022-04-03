import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"

function Navbar() {
  const bodyRef = useRef<HTMLBodyElement>()
  const toggleCircleRef = useRef<HTMLDivElement>()

  useEffect(() => {
    bodyRef.current = document.querySelector("body")
    toggleCircleRef.current = document.querySelector("#theme-toggle")
  }, [])

  function handleButtonClick(e) {
    e.preventDefault()

    if (bodyRef.current.classList.contains("dark")) {
      bodyRef.current.classList.remove("dark")
      bodyRef.current.classList.add("light")
      toggleCircleRef.current.classList.remove("translate-x-full")
    } else {
      bodyRef.current.classList.remove("light")
      bodyRef.current.classList.add("dark")
      toggleCircleRef.current.classList.add("translate-x-full")
    }
  }

  return (
    <nav
      className="flex items-center justify-around inset-x-0 top-0 h-16 fixed bg-slate-400 dark:bg-slate-800
    dark:text-white"
    >
      <ul className="flex ml-auto">
        <li className="dropdown">
          <Link
            to="/"
            className="p-16 text-[1.8rem] hover:bg-slate-400 dark:hover:bg-slate-700 text-slate-900
            dark:text-slate-200"
          >
            Do Play
          </Link>
          <ul
            className="dropdown-menu flex-col absolute top-16 dark:bg-slate-800 bg-slate-400
          dark:text-slate-200 rounded-b hidden"
          >
            <li className="mt-1 hover:bg-slate-400 dark:hover:bg-slate-700">
              <Link to="/" className=" p-1 ">
                How Much does/doesn’t your Degree pay?
              </Link>
            </li>
            <li className="mt-1 hover:bg-slate-400 dark:hover:bg-slate-700">
              <Link to="/" className=" p-1 ">
                What should I do?
              </Link>
            </li>
            <li className="mt-1 hover:bg-slate-400 dark:hover:bg-slate-700">
              <Link to="/" className=" p-1">
                What degree should I get?
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="ml-auto mr-4">
        <button
          className="w-12 h-6 border-black dark:border-white border-2 rounded-full"
          onClick={handleButtonClick}
        >
          <div
            id="theme-toggle"
            className="w-1/2 h-full rounded-full bg-black dark:bg-white transition-transform ease-in duration-200"
          ></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
