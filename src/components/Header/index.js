import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <nav className="navbar py-5">
      <div className="container mx-auto bg-dark">
        <div className="flex">
          <div className="logo">Logo</div>
          <ul className="flex">
            <li className="mx-5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mx-5">
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
