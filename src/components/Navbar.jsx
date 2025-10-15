import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Craftnexa.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-12 py-4">
        <img className="h-12" src={logo} width={180} height={50} />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>

          {/* <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
