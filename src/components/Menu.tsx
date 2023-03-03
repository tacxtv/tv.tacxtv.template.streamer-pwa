import React from 'react'
import { Link } from 'react-router-dom'

export default function render() {
  return (
    <nav id="header" className="absolute w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-transparent p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-white font-bold no-underline"
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/stream"
              >
                Stream
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}
