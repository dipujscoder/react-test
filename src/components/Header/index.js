import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navData } from "./data";

import "./header.css";

export default function Header() {
  useEffect(() => {
    // document.documentElement.classList.add("dark");
    // return () => {
    //   document.documentElement.classList.remove("dark");
    // };
  }, []);

  return (
    <nav className="navbar dark:bg-slate-900 py-4 border-slate-200 border-b-2 ">
      <div className="container mx-auto ">
        <div className="flex items-center">
          <div className="dark:text-white">Logo</div>
          <ul className="flex ml-auto navbar-nav">
            {navData.map((e) => {
              return (
                <li className="mx-2">
                  <NavLink
                    to={e.to}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "dark:text-white dark:bg-indigo-600 inline-block px-4 py-2 rounded nav-item"
                        : "dark:text-white inline-block px-4 py-2 rounded-md dark:hover:bg-indigo-600"
                    }
                  >
                    {e.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
